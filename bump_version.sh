CURRENT_TAG="$(git tag --sort=committerdate | tail -1)"
npm version $CURRENT_TAG --no-git-tag-version
npm version -f minor --no-git-tag-version