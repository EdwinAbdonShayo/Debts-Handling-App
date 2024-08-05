document.addEventListener("DOMContentLoaded", () => {
    const openPopupBtn = document.getElementById("open-popup");

    openPopupBtn.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    window.addEventListener("click", (e) => {
        if (e.target == popup) {
            popup.style.display = "none";
        }
    });

});
