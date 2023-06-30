#!/bin/bash

owner="Vanilla-OS"

echo "Fetching repositories..."
mapfile -t repositories < <(curl -s -H "Authorization: token $GITHUB_TOKEN" "https://api.github.com/orgs/$owner/repos" | jq -r '.[].name')

echo "Unique contributors:"
all_contributors=()

for repository in "${repositories[@]}"; do
  mapfile -t contributors < <(curl -s -H "Authorization: token $GITHUB_TOKEN" "https://api.github.com/repos/$owner/$repository/contributors" | jq -r '.[].login' | grep -Ev 'weblate|dependabot')

  if [[ ${#contributors[@]} -gt 0 ]]; then
    unique_contributors=()
    mapfile -t unique_contributors < <(printf '%s\n' "${contributors[@]}" | sort -u)
    all_contributors+=("${unique_contributors[@]}")
  fi
done

echo "Combined unique contributors:"
unique_all_contributors=()
mapfile -t unique_all_contributors < <(printf '%s\n' "${all_contributors[@]}" | sort -u | grep -Ev 'weblate|dependabot')
for contributor in "${unique_all_contributors[@]}"; do
  echo "* [@${contributor}](https://github.com/${contributor})"
done

echo "Total combined contributors: ${#unique_all_contributors[@]}"
