#!/bin/bash
#beta
git checkout beta
git reset --hard HEAD^
git merge dev
rm -rf ./blog/draft/
git add .
gitmoji -c
#master
git checkout master
git merge beta
git add .
gitmoji -c
git push
#dev
git checkout dev
git reset --hard HEAD
