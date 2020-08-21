#!/bin/bash
git checkout beta
git reset --hard HEAD^
git merge dev
rm -rf ./blog/draft/