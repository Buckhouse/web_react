#!/usr/bin/env python3
import os
import re

# 1) Compile a regex to find '/images/' that's preceded by a single or double quote, or backtick
pattern = re.compile(r'(["\'`])\/images\/')

# 2) The replacement text:
#    \1 = the captured quote/backtick
replacement = r'\1${import.meta.env.BASE_URL}images/'

# 3) Decide which file extensions to process
VALID_EXTENSIONS = ('.ts', '.tsx', '.js', '.jsx', '.json')

def fix_image_paths(root_dir='.'):
    for dirpath, dirs, files in os.walk(root_dir):
        for file in files:
            # 4) Only edit specific file types
            if file.endswith(VALID_EXTENSIONS):
                full_path = os.path.join(dirpath, file)
                
                # Skip node_modules or dist if you want
                if 'node_modules' in dirpath or 'dist' in dirpath:
                    continue

                with open(full_path, 'r', encoding='utf-8') as f_in:
                    text = f_in.read()

                # 5) Perform the find/replace
                replaced_text = pattern.sub(replacement, text)

                if replaced_text != text:
                    # 6) Write changes if there's a difference
                    with open(full_path, 'w', encoding='utf-8') as f_out:
                        f_out.write(replaced_text)
                    print(f'Updated: {full_path}')

if __name__ == '__main__':
    fix_image_paths()
    print("✅ Done! All /images/ references replaced.")