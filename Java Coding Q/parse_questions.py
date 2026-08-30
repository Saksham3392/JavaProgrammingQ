import re
import json

def parse_file(filename):
    with open(filename, "r", encoding="utf-8") as f:
        lines = f.readlines()

    questions = []
    current_q = None
    state = None  # None, "STATEMENT", "INPUT", "OUTPUT", "TESTCASES"
    current_tc = None
    tc_state = None  # "INPUT", "OUTPUT", "EXPLANATION"
    
    category = "OOP"
    q_num = 17

    def sanitize(text):
        return text.strip()

    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue

        if line == "Coding Questions":
            category = "Arrays"
            i += 1
            continue
        elif line == "Coding questions-based Collections: ArrayList":
            category = "ArrayList"
            i += 1
            continue
        elif line == "Coding questions based on Exception Handling":
            category = "Exceptions"
            i += 1
            continue

        # Match "1. Student Details" or "1. Check Number is Palindrome or Not"
        m = re.match(r"^(\d+)\.\s+(.*)$", line)
        if m and "Sample Test Case" not in line and "Explanation" not in line:
            if current_q:
                if current_tc:
                    current_q["sampleCases"].append(current_tc)
                    current_tc = None
                questions.append(current_q)
            
            title = m.group(2).strip()
            # Generate ID
            title_slug = re.sub(r'[^a-zA-Z0-9]+', '_', title).strip('_').lower()
            q_id = f"q{q_num}_{title_slug}"
            
            current_q = {
                "id": q_id,
                "num": str(q_num),
                "title": title,
                "tag": category,
                "subtitle": "",
                "brief": "",
                "starterCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Write your code here\n    }\n}",
                "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Solution not provided\n    }\n}",
                "hints": [],
                "sampleCases": []
            }
            q_num += 1
            state = None
            i += 1
            continue

        if not current_q:
            i += 1
            continue

        if line.startswith("Problem Statement:"):
            state = "STATEMENT"
            current_q["brief"] += line.replace("Problem Statement:", "").strip() + " "
            i += 1
            continue
        elif line.startswith("Input Format"):
            state = "INPUT_FORMAT"
            i += 1
            continue
        elif line.startswith("Output Format"):
            state = "OUTPUT_FORMAT"
            i += 1
            continue
        elif line.startswith("Sample Test Case") or line.startswith("Sample Input:"):
            if current_tc:
                current_q["sampleCases"].append(current_tc)
            
            tc_num = len(current_q["sampleCases"]) + 1
            current_tc = {
                "id": tc_num,
                "input": "",
                "expected": "",
                "explanation": ""
            }
            if line.startswith("Sample Input:"):
                state = "TESTCASES"
                tc_state = "INPUT"
            else:
                state = "TESTCASES"
                tc_state = None
            i += 1
            continue

        if state == "STATEMENT":
            if line not in ["Input Format", "Output Format"] and not line.startswith("Sample"):
                current_q["brief"] += line + " "
        elif state == "INPUT_FORMAT" or state == "OUTPUT_FORMAT":
            pass # We ignore format descriptions for brevity
        elif state == "TESTCASES":
            if line.startswith("Input:"):
                tc_state = "INPUT"
            elif line.startswith("Output:") or line.startswith("Sample Output:"):
                tc_state = "OUTPUT"
            elif line.startswith("Explanation:"):
                tc_state = "EXPLANATION"
            else:
                if tc_state == "INPUT":
                    current_tc["input"] += line + "\n"
                elif tc_state == "OUTPUT":
                    current_tc["expected"] += line + "\n"
                elif tc_state == "EXPLANATION":
                    current_tc["explanation"] += line + " "
        
        i += 1

    if current_q:
        if current_tc:
            current_q["sampleCases"].append(current_tc)
        questions.append(current_q)

    # Clean up fields
    for q in questions:
        q["brief"] = q["brief"].strip()
        for tc in q["sampleCases"]:
            tc["input"] = tc["input"].strip()
            tc["expected"] = tc["expected"].strip()
            tc["explanation"] = tc["explanation"].strip()

    # Generate JS
    js_out = ""
    for q in questions:
        # Stringify hints and sampleCases
        sample_cases_str = json.dumps(q["sampleCases"], indent=6)
        
        js_out += f"""
  ,
  {q['id']}: {{
    id: "{q['id']}",
    num: "{q['num']}",
    title: {json.dumps(q['title'])},
    tag: "{q['tag']}",
    subtitle: "",
    brief: {json.dumps(q['brief'])},
    starterCode: {json.dumps(q['starterCode'])},
    solutionCode: {json.dumps(q['solutionCode'])},
    hints: [],
    sampleCases: {sample_cases_str}
  }}"""

    with open("parsed_questions.js", "w", encoding="utf-8") as f:
        f.write(js_out)

    print(f"Successfully parsed {len(questions)} questions.")

parse_file("raw_questions.txt")
