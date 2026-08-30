import re

with open("app.js", "r", encoding="utf-8") as f:
    app_content = f.read()

with open("parsed_questions.js", "r", encoding="utf-8") as f:
    parsed_content = f.read()

# find where PROBLEMS ends.
# The end of PROBLEMS is '  }\n};\n' or similar.
# Let's search for it.
match = re.search(r'    edgeCases: \[\]\n  }\n};\n', app_content)
if match:
    new_content = app_content[:match.start() + len('    edgeCases: []\n  }')] + parsed_content + "\n};\n" + app_content[match.end():]
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Appended to app.js using regex 1")
else:
    # try another format
    match2 = re.search(r'    \]\n  }\n};\n', app_content)
    if match2:
        new_content = app_content[:match2.start() + len('    ]\n  }')] + parsed_content + "\n};\n" + app_content[match2.end():]
        with open("app.js", "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Appended to app.js using regex 2")
    else:
        print("Could not find insertion point!")
