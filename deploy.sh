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


# Setup Git 

INPUT_EMAIL=${INPUT_EMAIL:-'github-action@users.noreply.github.com'}
INPUT_NAME=${INPUT_NAME:-'GitHub Action'}
INPUT_ACTOR=${INPUT_ACTOR:-${GITHUB_ACTOR}}

git config user.email ${INPUT_EMAIL}
git config user.name ${INPUT_NAME}
git config user.password ${{ secrets.GITHUB_TOKEN }}

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master


# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:GGJason/blog.git master:gh-pages

cd -