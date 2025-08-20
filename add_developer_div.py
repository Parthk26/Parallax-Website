import re

with open('index.html', 'r') as f:
    content = f.read()

content = re.sub(r'<body>', '<body>\\n    <div class="developer-effect"></div>', content, 1)

with open('index.html', 'w') as f:
    f.write(content)
