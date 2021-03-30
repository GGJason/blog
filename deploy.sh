#!/usr/bin/env sh

# abort on errors
set -e

# install and build
npm install
npm run build

# navigate into the build output directory
cd blog/.vuepress/dist

# if you are deploying to a custom domain
echo 'ggjason.tw' > CNAME

git config --global user.email 'ggjason.tw@gmail.com'
git config --global user.name 'GitHub Action'

git config user.email 'ggjason.tw@gmail.com'
git config user.name 'GitHub Action'
echo $GITHUB_TOKEN
git config user.password $GITHUB_TOKEN
git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master


# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:GGJason/blog.git master:gh-pages

cd -