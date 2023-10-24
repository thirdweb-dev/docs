typedoc() {
  pnpm typedoc
  rm ./typedoc/index.html
  mv ./typedoc/modules.html ./typedoc/index.html
  cd ./typedoc
  find . -type f -name "index.html" -exec sed -i '' -e "s/href=\"\([a-gi-zA-GI-Z][a-zA-Z]\)/href=\"$1\/\1/g" -e "s/src=\"\([a-gi-zA-GI-Z][a-zA-Z]\)/src=\"$1\/\1/g" {} \;
  cd ..
  rm -rf "../../../../static/reference/$1/"
  mkdir "../../../../static/reference/$1/"
  mv ./typedoc/* "../../../../static/reference/$1/"
}

git submodule init
git submodule update --remote
git submodule foreach git checkout main
git submodule foreach git pull origin main
yarn
# go into js package and build
cd ./submodules/js
pnpm install
pnpm build
# SDK
cd ./packages/sdk
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
pnpm generate-docs
typedoc sdk
# React
cd ../react
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
pnpm generate-docs
typedoc react
# React-Native
cd ../react-native
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
typedoc react-native
# React Core
cd ../react-core
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
pnpm generate-docs
# Storage
cd ../storage
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
pnpm generate-docs
typedoc storage
# Wallets
cd ../wallets
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
typedoc wallets
cd ../../../..
yarn make-docs
yarn generate-snippets
yarn generate-github-examples
yarn prettier