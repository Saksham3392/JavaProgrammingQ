import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's inspect briefs for a few questions
for q in ["q1_concat", "q11_employee_salary", "q18_employee_salary_calculation_using_method_overloading", "q21_classes_and_objects_mechanical_worker_details", "q25_check_number_is_palindrome_or_not", "q46_validate_marks"]:
    idx = content.find(q)
    m = re.search(r'brief:\s*"([^"]+)"', content[idx:idx+1500])
    if m:
        print(f"=== {q} ===")
        print(m.group(1))
        print()
