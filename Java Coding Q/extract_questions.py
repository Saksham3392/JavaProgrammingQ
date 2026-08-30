import json
import re

transcript_path = r"C:\Users\Asus\.gemini\antigravity\brain\c2cb4653-9813-4119-a350-faaf1fd7a784\.system_generated\logs\transcript_full.jsonl"

last_user_input = ""
with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        data = json.loads(line)
        if data.get("type") == "USER_INPUT":
            last_user_input = data.get("content", "")

with open("raw_questions.txt", "w", encoding="utf-8") as f:
    f.write(last_user_input)

print("Extracted full to raw_questions.txt")
