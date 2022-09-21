git submodule init
git submodule update --remote
git submodule foreach git checkout main
git submodule foreach git pull origin main
yarn install
# go into js package and build
cd ./submodules/js
yarn install
yarn build
# generate sdk docs
cd ./packages/sdk
mkdir ./etc
yarn api-extractor run --local
yarn api-documenter markdown -i ./temp -o ./docs
node ./scripts/generate-snippets.mjs
node ./scripts/generate-feature-snippets.mjs
# generate react dkcs
cd ../react
mkdir ./etc
yarn api-extractor run --local
yarn api-documenter markdown -i ./temp -o ./docs
node ./scripts/generate-snippets.mjs
# generate storage docs
cd ../storage
mkdir ./etc
yarn generate-docs
# done with doc creation, back to root
cd ../../../..
yarn make-docs
yarn generate-snippets
yarn generate-github-examples
yarn prettier