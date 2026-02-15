#!/bin/bash

mkdir -p temp
rm -rf temp/*
rm -rf temp/.git

rm -rf dist
npm run build:libs
npm run build:storybook

cd temp
git clone https://github.com/PabloMarzoa/pablomarzoa.github.io.git
mv pablomarzoa.github.io/.git ./
# Preserving .github if it exists, though usually for user pages it might not be critical, but good practice.
if [ -d "pablomarzoa.github.io/.github" ]; then
  mv pablomarzoa.github.io/.github ./
fi

rm -rf pablomarzoa.github.io/*
mv .git pablomarzoa.github.io/
if [ -d ".github" ]; then
  mv .github pablomarzoa.github.io/
fi

cp -rf ../dist/storybook/pmds-hub-storybook/* pablomarzoa.github.io/

cd pablomarzoa.github.io
git config http.postBuffer 524288000
git add ./
git commit -m "feat: update storybook build"
git push
cd ../../
rm -rf temp
