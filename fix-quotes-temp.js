const fs = require('fs');
let content = fs.readFileSync('src/i18n/translations.ts', 'utf8');

// replace unescaped quotes with escaped quotes
content = content.replace(/"美国公园"/g, '\\"美国公园\\"');
content = content.replace(/"萨拉多浴场"/g, '\\"萨拉多浴场\\"');
content = content.replace(/"千禧年滨河大道基金会"/g, '\\"千禧年滨河大道基金会\\"');
content = content.replace(/"瓜亚基尔公园"/g, '\\"瓜亚基尔公园\\"');
content = content.replace(/"城市即客厅"/g, '\\"城市即客厅\\"');

fs.writeFileSync('src/i18n/translations.ts', content, 'utf8');
console.log('Fixed quotes');
