import json
import re
import sys
import os

def format_problems_file():
    file_path = 'public/assets/js/typst-problems.js'
    print(f"Starting to format {file_path}")
    
    # Ensure file exists
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found")
        sys.exit(1)

    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print("Successfully read file")
        
        # Extract the problems array using regex
        match = re.search(r'const problems = (\[[\s\S]*?\]);', content)
        if not match:
            print("Error: Could not find problems array in file")
            sys.exit(1)
        
        # Parse the JSON array
        problems_str = match.group(1)
        problems = json.loads(problems_str)
        
        print(f"Found {len(problems)} problems to format")
        
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
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print("Successfully formatted and saved file")
        
    except Exception as e:
        print(f"Error occurred: {str(e)}")
        sys.exit(1)

if __name__ == '__main__':
    format_problems_file()
