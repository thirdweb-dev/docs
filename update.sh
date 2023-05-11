git submodule init
git submodule update --remote
git submodule foreach git checkout main
git submodule foreach git pull origin main
yarn install
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
# React
cd ../react
if [ ! -d "./etc" ]; then
  mkdir ./etc
fi
pnpm generate-docs
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
cd ../../../..
yarn make-docs
yarn generate-snippets
yarn generate-github-examples
yarn prettier