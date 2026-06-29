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
        
        print(f"✅ 成功更新 {css_file}")
        print(f"   将: {old_bg}")
        print(f"   改为: {new_bg}")
    else:
        print(f"⚠️ 在 {css_file} 中未找到预期的旧路径")
        print(f"   查找: {old_bg}")
        
        # 显示实际内容以供调试
        if "hero-bg" in content:
            # 找到 hero-bg 部分
            import re
            match = re.search(r'\.hero-bg\s*\{[^}]+\}', content, re.DOTALL)
            if match:
                print(f"\n   实际找到的 .hero-bg 内容:")
                print(match.group(0)[:200])

if __name__ == "__main__":
    update_css()
