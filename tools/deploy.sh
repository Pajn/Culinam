#!/bin/sh

# Only deploy when merged to master
if [ "$TRAVIS_BRANCH" != "master" ]
then
  exit 0

elif [ "$TRAVIS_PULL_REQUEST" != "false" ]
then
  exit 0
fi

# Fail fast
set -e

# Build
npm run build
node ./node_modules/babel-cli/bin/babel-node.js --presets es2015,react tools/bootstrap.js > dist/index.html

# Deploy
cd dist

git init
git checkout -b gh-pages
git config --global user.email "pie.or.paj@gmail.com"
git config --global user.name "Travis"
git remote add deploy "https://$GITHUB_AUTH@github.com/Pajn/Culinam.git"

git add -A

git commit -am "Deploy of build #$TRAVIS_BUILD_NUMBER of commit $TRAVIS_COMMIT"
git push deploy gh-pages --force > /dev/null 2>&1
