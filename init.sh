#!/usr/bin/env bash

echo Project name?
read projectName
if [ -z "$projectName" ]; then
  echo "Project name can not be empty. Try again"
  exit 1
fi

echo Project description?
read projectDescription

FILES="./build/index.html
./build/webpack.base.config.js
./package.json
./README.md"

cp -r ./template/. ./

for file in $FILES
do
	sed -i -e "s/projectName/$projectName/g" $file
  sed -i -e "s/projectDescription/$projectDescription/g" $file
done

echo "Do you wish to install dependencies?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) npm install; break;;
        No ) break;;
    esac
done

echo "Lets set the new git origin URL (ex. https://github.com/user/repo.git):"
read projectGitUrl
if [ -n "$projectGitUrl" ]; then
  git remote set-url origin $projectGitUrl
else
  echo "git origin was not set, continue"
fi

rm -rf ./template/
rm init.sh
rm LICENSE

echo Enjoy the dev
exit 0
