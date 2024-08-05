document.addEventListener("DOMContentLoaded", () => {
    const openPopupBtn = document.getElementById("open-popup");
    const popup = document.getElementById("popup");
    const languageForm = document.getElementById("language-form");
    const languageSelect = document.getElementById("language-select");

    // Open popup
    openPopupBtn.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    // Close popup when clicking outside of it
    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

    // Save language preference
    languageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const selectedLanguage = languageSelect.value;
        localStorage.setItem("preferredLanguage", selectedLanguage);
        // alert("Language preference saved: " + selectedLanguage);
        popup.style.display = "none";
        applyLanguage(selectedLanguage);
    });

    // Apply saved language preference
    const applyLanguage = (language) => {
        if (language === "sw") {
            document.querySelector("h1").textContent = "Wadeni Wangu";
            document.querySelector("a[href='calculator.html']").textContent = "Kikokotoo";
            document.querySelector("a[href='debtors.html']").textContent = "Wadeni";
            document.getElementById("open-popup").textContent = "Mipangilio";
        } else {
            document.querySelector("h1").textContent = "My Debtors";
            document.querySelector("a[href='calculator.html']").textContent = "Calculator";
            document.querySelector("a[href='debtors.html']").textContent = "Debtors";
            document.getElementById("open-popup").textContent = "Settings";
        }
    };

    // Apply the language preference on page load
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
        applyLanguage(savedLanguage);
    }
});
