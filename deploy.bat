
npm run docs:build
cd docs/.vuepress/dist
git add -A
git commit -m 'deploy'
git push -f git@github.com:mengchengxian/dreamBlog.git master:gh-pages
cd -