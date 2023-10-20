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
pnpm typedoc
rm ./typedoc/index.html
mv ./typedoc/modules.html ./typedoc/index.html
mv ./typedoc ../../../../static/reference/sdk
# React
cd ../react
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
pnpm generate-docs
pnpm typedoc
rm ./typedoc/index.html
mv ./typedoc/modules.html ./typedoc/index.html
mv ./typedoc ../../../../static/reference/react
# React
cd ../react-native
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
pnpm typedoc
rm ./typedoc/index.html
mv ./typedoc/modules.html ./typedoc/index.html
mv ./typedoc ../../../../static/reference/react-native
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
pnpm typedoc
rm ./typedoc/index.html
mv ./typedoc/modules.html ./typedoc/index.html
mv ./typedoc ../../../../static/reference/storage
# Wallets
cd ../wallets
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
pnpm typedoc
rm ./typedoc/index.html
mv ./typedoc/modules.html ./typedoc/index.html
mv ./typedoc ../../../../static/reference/wallets
cd ../../../..
yarn make-docs
yarn generate-snippets
yarn generate-github-examples
yarn prettier