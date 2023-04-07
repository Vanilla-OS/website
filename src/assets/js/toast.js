class Toast {
    static new(message) {
        let toast = document.createElement("div");
        toast.classList.add("toast");
        toast.innerHTML = `
            <div class="toast-content">
                <p class="toast-message"></p>
                <button class="toast-close"><span class="material-icons-outlined"> close </span></button>
            </div>
        `;
        toast.querySelector(".toast-message").innerHTML = message;
        toast.querySelector(".toast-close").addEventListener("click", () => {
            toast.remove();
        });
        document.body.appendChild(toast);
    }
}
