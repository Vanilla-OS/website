function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const focusClass = entry.target.getAttribute("data-focus-class");
      const focusDomClass = entry.target.getAttribute("focus-dom");
      entry.target.classList.remove(focusClass);
      entry.target.classList.add(focusDomClass);
    }
  });
}

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(handleIntersection, options);

const onFocusElements = document.querySelectorAll(".onFocus");

onFocusElements.forEach((element) => {
  observer.observe(element);
});
