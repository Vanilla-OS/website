#!/bin/bash

echo "Starting the script."
echo "This script will fetch a lot of repositories."
echo

owner="Vanilla-OS"

echo "Fetching repositories..."
mapfile -t repositories < <(curl -s -H "Authorization: token $token" "https://api.github.com/orgs/$owner/repos" | jq -r '.[].name')

for repository in "${repositories[@]}"; do
  mapfile -t contributors < <(curl -s -H "Authorization: token $token" "https://api.github.com/repos/$owner/$repository/contributors" | jq -r '.[].login' | grep -Ev 'weblate|dependabot[bot]')

  if [[ ${#contributors[@]} -gt 0 ]]; then
    unique_contributors=()
    mapfile -t unique_contributors < <(printf '%s\n' "${contributors[@]}" | sort -u)
    all_contributors+=("${unique_contributors[@]}")
  fi
done

echo "Making the combined unique contributors list..."
unique_all_contributors=()
mapfile -t unique_all_contributors < <(printf '%s\n' "${all_contributors[@]}" | sort -u | grep -Ev 'weblate|dependabot[bot]')

# Generate the output string
output="\
<div align=\"center\">
  <br><img src=\"assets/vanilla-contributors-mono.png?raw=true#gh-dark-mode-only\" height=\"40\">
  <br><img src=\"assets/vanilla-contributors.png?raw=true#gh-light-mode-only\" height=\"40\">

---
  <p>A list of contributors to the project across all repositories</p>
  <sup>Thanks to everyone in this list who has contributed to our project</sup>
  <br><sup>We are <b>${#unique_all_contributors[@]}</b> unique contributors at the moment when this was updated</sup>
</div>

"

# Append contributors to the output string
for contributor in "${unique_all_contributors[@]}"; do
  output+="* [@${contributor}](https://github.com/${contributor})\n"
done

# Replace the placeholder with the contributor list
output="${output//\*this-has-to-change*\n/${#unique_all_contributors[@]}}"

# Append the closing part of the output string
output+="\n<div align=\"center\">
  <sup>This list is updated every week.</sup>
</div>"

# Write the output to a file
echo -e "$output" > result.txt
