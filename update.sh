git submodule init
git submodule update --remote
git submodule foreach git checkout main
git submodule foreach git pull origin main
pnpm install
# done with doc creation, back to root
cd ../../../..
# yarn make-docs
# yarn generate-snippets
yarn generate-github-examples
yarn prettier