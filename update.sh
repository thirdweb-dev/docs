git submodule init
git submodule update --remote
git submodule foreach git checkout main
git submodule foreach git pull origin main
pnpm install
# go into js package and build
cd ./submodules/js
pnpm install
pnpm build
# generate sdk docs
cd ./packages/sdk
mkdir ./etc
pnpm generate-docs
# generate react docs
cd ../react
mkdir ./etc
pnpm generate-docs
# generate react-core docs
cd ../react-core
mkdir ./etc
pnpm generate-docs
# generate storage docs
cd ../storage
mkdir ./etc
pnpm build
pnpm generate-docs
# done with doc creation, back to root
cd ../../../..
yarn make-docs
yarn generate-snippets
yarn generate-github-examples
yarn prettier