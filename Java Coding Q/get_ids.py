import re

with open('parsed_questions.js','r',encoding='utf-8') as f:
    content=f.read()

matches = re.findall(r'id: "(q\d+_[^"]+)",\s+num: "(\d+)",\s+title: "([^"]+)"', content)
for m in matches:
    print(m[0])
