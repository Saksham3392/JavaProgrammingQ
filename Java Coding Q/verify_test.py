import urllib.request
import json
import re

def test_single_problem(qid):
    with open('app.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the problem block
    pattern = r'id:\s*"' + qid + r'",.*?solutionCode:\s*"([^"]*)",.*?sampleCases:\s*(\[.*?\])\s*(?:,|})'
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        print(f"Not found: {qid}")
        return
        
    code = match.group(1).replace('\\n', '\n').replace('\\t', '\t').replace('\\"', '"')
    tc_str = match.group(2)
    
    # regex extract inputs and expected
    objs = re.findall(r'\{\s*id.*?\}', tc_str, re.DOTALL)
    tc_list = []
    for obj in objs:
        inp_m = re.search(r'"input":\s*"([^"]*)"', obj)
        exp_m = re.search(r'"expected":\s*"([^"]*)"', obj)
        if inp_m and exp_m:
            tc_list.append({
                "id": len(tc_list)+1,
                "input": inp_m.group(1).replace('\\n', '\n'),
                "expected": exp_m.group(1).replace('\\n', '\n')
            })
            
    if not tc_list:
        print("No testcases found")
        return

    url = "http://localhost:5000/api/run"
    payload = {
        "sourceCode": code,
        "testCases": tc_list
    }
    
    req = urllib.request.Request(url, json.dumps(payload).encode('utf-8'), {'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req) as response:
            res = json.loads(response.read().decode('utf-8'))
            print(f"Compile Output: {res.get('compileOutput')}")
            for r in res.get('results', []):
                print(f"TC {r.get('id')} - Passed: {r.get('passed')}")
                print(f"  Input: {repr(r.get('input'))}")
                print(f"  Expected: {repr(r.get('expected'))}")
                print(f"  Actual: {repr(r.get('actual'))}")
                print(f"  Error: {r.get('error')}")
    except Exception as e:
        print(f"Error: {e}")

test_single_problem("q25_check_number_is_palindrome_or_not")
test_single_problem("q41_age_validation")
test_single_problem("q31_reverse_an_array")
