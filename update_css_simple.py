#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
更新 globals.css 文件中的背景图片路径
"""

def update_css():
    css_file = 'src/app/globals.css'
    
    # 读取文件
    with open(css_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 替换背景图片路径
    old_bg = "background: url('/gallery/la-chocolatera (1).jpg');"
    new_bg = "background: url('/gallery/plaza-rodolfo-baquerizo-moreno (1).jpg');"
    
    if old_bg in content:
        content = content.replace(old_bg, new_bg)
        
        # 写回文件
        with open(css_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("[OK] Successfully updated " + css_file)
        print("  From: " + old_bg)
        print("  To:   " + new_bg)
        return True
    else:
        print("[WARN] Old path not found in " + css_file)
        print("  Looking for: " + old_bg)
        return False

if __name__ == "__main__":
    success = update_css()
    if not success:
        print("\nPlease check the file manually.")
