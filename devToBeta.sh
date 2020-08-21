#!/bin/bash
git checkout beta
git reset --hard HEAD^
git merge dev
rm -rf ./blog/draft/
git add .
gitmoji -c
git checkout master
#git merge beta
#git push