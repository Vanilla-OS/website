function generateTimeline(data, dom) {
  const timelineContainer = document.querySelector(dom);

  if (timelineContainer.classList.contains("collapsed")) {
    const uncollapseButton = document.createElement("button");
    uncollapseButton.classList.add("button");
    uncollapseButton.classList.add("timeline-uncollapse");
    uncollapseButton.textContent = "Show all";
    uncollapseButton.addEventListener("click", () => {
      timelineContainer.classList.toggle("collapsed");
      uncollapseButton.textContent = timelineContainer.classList.contains(
        "collapsed"
      )
        ? "Show all"
        : "Hide";
    });
    timelineContainer.appendChild(uncollapseButton);
  }

  data.events.forEach((event) => {
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");
    timelineItem.classList.add(event.className || "");

    const timelineLabel = document.createElement("span");
    timelineLabel.classList.add("timeline-label");
    timelineLabel.textContent = event.date || "";

    const timelineContent = document.createElement("div");
    timelineContent.classList.add("timeline-item-content");

    const timelineTitle = document.createElement("h4");
    timelineTitle.textContent = event.title || "";

    const timelineDescription = document.createElement("p");
    timelineDescription.innerHTML = event.description || "";

    timelineContent.appendChild(timelineTitle);
    timelineContent.appendChild(timelineDescription);

    timelineItem.appendChild(timelineLabel);
    timelineItem.appendChild(timelineContent);

    timelineContainer.appendChild(timelineItem);
  });
}
