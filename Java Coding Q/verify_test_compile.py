import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'id:\s*"q25_check_number_is_palindrome_or_not",.*?solutionCode:\s*"([^"]*)",'
match = re.search(pattern, content, re.DOTALL)
if match:
    code = match.group(1).replace('\\n', '\n').replace('\\t', '\t').replace('\\"', '"')
    with open('Main.java', 'w', encoding='utf-8') as f:
        f.write(code)
    print("Wrote Main.java")
else:
    print("Failed to extract")
