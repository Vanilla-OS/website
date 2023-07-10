#!/bin/bash

echo -e "Starting the script."
echo -e "This script will fetch a lot of repositories."
echo

owner="Vanilla-OS"

echo "Fetching repositories..."
mapfile -t repositories < <(curl -s -H "Authorization: token $token" "https://api.github.com/orgs/$owner/repos" | jq -r '.[].name')

for repository in "${repositories[@]}"; do
  mapfile -t contributors < <(curl -s -H "Authorization: token $token" "https://api.github.com/repos/$owner/$repository/contributors" | jq -r '.[].login' | grep -Ev 'weblate|dependabot')

  if [[ ${#contributors[@]} -gt 0 ]]; then
    unique_contributors=()
    mapfile -t unique_contributors < <(printf '%s\n' "${contributors[@]}" | sort -u)
    all_contributors+=("${unique_contributors[@]}")
  fi
done

echo "Making the combined unique contributors list..."
unique_all_contributors=()
mapfile -t unique_all_contributors < <(printf '%s\n' "${all_contributors[@]}" | sort -u | grep -Ev 'weblate|dependabot')

# Sort the unique_all_contributors array alphabetically
IFS=$'\n' sorted_unique_all_contributors=($(sort <<<"${unique_all_contributors[*]}"))
unset IFS
unique_all_contributors=("${sorted_unique_all_contributors[@]}")

# Generate the output string
output="\
<div align=\"center\">
  <br><img src=\"assets/vanilla-contributors-mono.png?raw=true#gh-dark-mode-only\" height=\"40\">
  <br><img src=\"assets/vanilla-contributors.png?raw=true#gh-light-mode-only\" height=\"40\">
  <hr />
  <p>A list of contributors across all our repositories</p>
  <sup>There are <b>${#unique_all_contributors[@]}</b> unique contributors at the moment when this script was last updated.<br> Thanks ❤️ to everyone who have contributed.</sup>
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
