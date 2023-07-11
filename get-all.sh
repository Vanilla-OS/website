#!/bin/bash

echo "Starting the script."
echo "This script will fetch a lot of repositories."
echo

owner="Vanilla-OS"

# set -x

echo "Fetching repositories..."
mapfile -t repositories < <(
  curl -s -H "Authorization: token $token" "https://api.github.com/orgs/$owner/repos" |
  jq -r '.[].name'
)

all_contributors=()

for repository in "${repositories[@]}"; do
  mapfile -t contributors < <(
    curl -s -H "Authorization: token $token" "https://api.github.com/repos/$owner/$repository/contributors" |
    jq -r '.[] | "\(.login):\(.id)"' |
    grep -Ev 'weblate|dependabot'
  )

  if [[ ${#contributors[@]} -gt 0 ]]; then
    unique_contributors=()
    mapfile -t unique_contributors < <(printf '%s\n' "${contributors[@]}" | sort -u)
    all_contributors+=("${unique_contributors[@]}")
  fi
done

echo "Making the combined unique contributors list..."
unique_all_contributors=()
mapfile -t unique_all_contributors < <(
  printf '%s\n' "${all_contributors[@]}" | sort -u | grep -Ev 'weblate|dependabot'
)

# Sort the unique_all_contributors array alphabetically
IFS=$'\n' sorted_unique_all_contributors=($(sort <<<"${unique_all_contributors[*]}"))
unset IFS
unique_all_contributors=("${sorted_unique_all_contributors[@]}")

# Generate the output string
output=$(cat <<EOF
---
layout: page
title: Contributors
description: A list of contributors across all our repositories
---

<div align="center">
  <p>There are <b>${#unique_all_contributors[@]}</b> unique contributors at the time of indexing.<br> Thanks ❤️ to everyone who have contributed.</p>
  <div class="contributors contributors--as-list">
EOF
)

# Append contributors to the output string
for contributor in "${unique_all_contributors[@]}"; do
  login=$(echo "$contributor" | cut -d':' -f1)
  id=$(echo "$contributor" | cut -d':' -f2)
  output+=$(cat <<EOF
    <a href="https://github.com/${login}" target="_blank">
      <img src="https://avatars.githubusercontent.com/u/${id}?v=9" width="100px;" alt="${login}" referrerpolicy="no-referrer">
      <span>${login}</span>
    </a>
EOF
)
done


# Append the closing part of the output string
output+=$(cat <<EOF
  </div>
  <p>This list is updated every week.</p>
</div>
EOF
)

# Write the output to a file
echo -e "$output" > contributors-list.md
