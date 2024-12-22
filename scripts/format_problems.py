import json
import re

def format_problems_file():
    # Read the file
    with open('public/assets/js/typst-problems.js', 'r') as f:
        content = f.read()
    
    # Extract the problems array using regex
    match = re.search(r'const problems = (\[[\s\S]*?\]);', content)
    if not match:
        raise ValueError("Could not find problems array in file")
    
    # Parse the JSON array
    problems_str = match.group(1)
    problems = json.loads(problems_str)
    
    # Format the JSON with consistent indentation
    formatted_json = '[\n'
    for i, problem in enumerate(problems):
        formatted_json += '    {\n'
        formatted_json += '        "title": ' + json.dumps(problem['title']) + ',\n'
        formatted_json += '        "description": ' + json.dumps(problem['description']) + ',\n'
        formatted_json += '        "typst": ' + json.dumps(problem['typst']) + '\n'
        formatted_json += '    }'
        if i < len(problems) - 1:
            formatted_json += ','
        formatted_json += '\n'
    formatted_json += ']'
    
    # Replace the problems array in the file
    new_content = re.sub(
        r'const problems = \[[\s\S]*?\];',
        f'const problems = {formatted_json};',
        content
    )
    
    # Write back to file
    with open('public/assets/js/typst-problems.js', 'w') as f:
        f.write(new_content)

if __name__ == '__main__':
    format_problems_file()
