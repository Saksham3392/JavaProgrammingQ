import json
import urllib.request
import re

def parse_app_js():
    with open('app.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We need to extract each problem object from app.js
    # We can find all ids:
    ids = re.findall(r'id:\s*"([^"]+)",', content)
    
    problems = []
    
    for qid in ids:
        # Extract the solutionCode and sampleCases for this qid
        # To avoid greedy match issues, we'll slice the string starting from this qid
        idx = content.find(f'id: "{qid}"')
        if idx == -1:
            idx = content.find(f"id: '{qid}'")
        
        block = content[idx:idx+10000] # reasonable chunk
        
        # Extract solutionCode
        # solutionCode: `...` or solutionCode: "..."
        sol_match = re.search(r'solutionCode:\s*`([^`]+)`', block)
        if not sol_match:
            sol_match = re.search(r'solutionCode:\s*"([^"]+)"', block)
        
        if not sol_match:
            print(f"Failed to find solution for {qid}")
            continue
            
        sol = sol_match.group(1).replace('\\n', '\n').replace('\\t', '\t').replace('\\"', '"')
        
        # Extract sampleCases
        # sampleCases: [ ... ]
        tc_match = re.search(r'sampleCases:\s*(\[.*?\])\s*(?:,|})', block, re.DOTALL)
        if not tc_match:
            print(f"Failed to find testcases for {qid}")
            continue
            
        tc_str = tc_match.group(1)
        # JS object keys might not be quoted, but in parsed_questions they are.
        # Let's fix missing quotes around keys:
        tc_str = re.sub(r'(\w+):', r'"\1":', tc_str)
        # remove single quotes
        tc_str = tc_str.replace("'", '"')
        try:
            tc_list = json.loads(tc_str)
        except Exception as e:
            # If JSON parsing fails, we'll try a regex to manually extract input and expected
            tc_list = []
            inputs = re.findall(r'"input":\s*"([^"]+)"', tc_str.replace('\\n', '\n'))
            expecteds = re.findall(r'"expected":\s*"([^"]+)"', tc_str.replace('\\n', '\n'))
            
            # Since regex on JSON strings is tricky (nested quotes), let's fallback to exact regex from the un-replaced tc_str:
            orig_tc_str = tc_match.group(1)
            # Find all objects { id: ..., input: ..., expected: ..., ... }
            objs = re.findall(r'\{\s*id.*?\}', orig_tc_str, re.DOTALL)
            for obj in objs:
                inp_m = re.search(r'input:\s*[`" ]([^`"]+)[`"]', obj)
                exp_m = re.search(r'expected:\s*[`" ]([^`"]+)[`"]', obj)
                if inp_m and exp_m:
                    tc_list.append({
                        "id": len(tc_list)+1,
                        "input": inp_m.group(1).replace('\\n', '\n'),
                        "expected": exp_m.group(1).replace('\\n', '\n')
                    })

        problems.append({
            "id": qid,
            "solutionCode": sol,
            "testCases": tc_list
        })
    return problems

def test_problem(prob):
    url = "http://localhost:5000/api/run"
    payload = {
        "sourceCode": prob['solutionCode'],
        "testCases": prob['testCases']
    }
    
    req = urllib.request.Request(url, json.dumps(payload).encode('utf-8'), {'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req) as response:
            res = json.loads(response.read().decode('utf-8'))
            passed = res.get('passed', 0)
            total = res.get('total', 0)
            if passed == total and total > 0:
                print(f"[OK] {prob['id']} passed {passed}/{total}")
            else:
                print(f"[FAIL] {prob['id']} passed {passed}/{total}")
                for result in res.get('results', []):
                    if not result.get('passed'):
                        print(f"  --> Failed TC {result.get('id')}")
                        print(f"      Input: {result.get('input')}")
                        print(f"      Expected: {result.get('expected')}")
                        print(f"      Actual: {result.get('actual')}")
                        print(f"      Error: {result.get('error')}")
    except Exception as e:
        print(f"[ERROR] {prob['id']} exception: {e}")

if __name__ == '__main__':
    problems = parse_app_js()
    print(f"Found {len(problems)} problems.")
    
    # We can selectively test the ones we parsed from solutions dictionary if parsing app.js fails,
    # but let's try the full suite first.
    for p in problems:
        if len(p['testCases']) == 0:
            print(f"[SKIP] {p['id']} - no testcases parsed properly.")
            continue
        test_problem(p)
