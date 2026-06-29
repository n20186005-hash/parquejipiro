import re

with open('src/i18n/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace quotes around specific phrases that are causing syntax errors
# E.g. "千禧年滨河大道基金会" -> “千禧年滨河大道基金会”
content = content.replace('"美国公园"', '“美国公园”')
content = content.replace('"萨拉多浴场"', '“萨拉多浴场”')
content = content.replace('"瓜亚基尔公园"', '“瓜亚基尔公园”')
content = content.replace('"千禧年滨河大道基金会"', '“千禧年滨河大道基金会”')
content = content.replace('"城市即客厅"', '“城市即客厅”')
content = content.replace('"滨水城市"', '“滨水城市”')

with open('src/i18n/translations.ts', 'w', encoding='utf-8') as f:
    f.write(content)
