CURRENT_TAG="$(git tag --sort=committerdate | tail -1)"

echo "setting current verion to $CURRENT_TAG"
npm version $CURRENT_TAG --no-git-tag-version
echo "bumping version to next minor version"
npm version -f minor --no-git-tag-version