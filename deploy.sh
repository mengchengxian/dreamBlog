
#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件， npm run docs:build
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# git初始化，每次初始化不影响推送
git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:mengchengxian/dreamBlog.git master:gh-pages
