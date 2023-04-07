function loadAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(accordionItem => {
        accordionItem.addEventListener('click', event => {
            accordionItems.forEach(accordionItem => {
                accordionItem.classList.remove('accordion-open');
            });
            accordionItem.classList.add('accordion-open');
        });
        }
    );
}

window.addEventListener('load', loadAccordion);
