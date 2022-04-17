#!/usr/bin/env sh

# 发生错误时终止
set -e

# 进入构建文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME
echo "初始化GIT: ===========================> git init"
git init
echo "添加暂存GIT: =========================> git add -A"
git add -A
echo "提交暂存GIT: =========================> git commit -m 'deploy'"
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main
echo "推送GIT: ============================> git push"
# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:lidengkedev/vue3-typescript.git master:gh-pages

cd -