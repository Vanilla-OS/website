function loadButton() {
    const buttons = document.querySelectorAll('.button-dropdown');
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            buttons.forEach(button => {
                button.classList.remove('button-dropdown-open');
            });
            button.classList.add('button-dropdown-open');
        });
    });
}

window.addEventListener('click', event => {
    const buttons = document.querySelectorAll('.button-dropdown');
    buttons.forEach(button => {
        if (!button.contains(event.target)) {
            button.classList.remove('button-dropdown-open');
        }
    });
});


window.addEventListener('load', loadButton);

