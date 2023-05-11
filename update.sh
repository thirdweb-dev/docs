git submodule init
git submodule update --remote
git submodule foreach git checkout main
git submodule foreach git pull origin main
pnpm install
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
pnpm make-docs
pnpm generate-snippets
pnpm generate-github-examples
pnpm prettier