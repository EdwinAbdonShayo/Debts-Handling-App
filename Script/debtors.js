document.addEventListener("DOMContentLoaded", () => {
    const addRecordBtn = document.getElementById("add-record-btn");
    const popupForm = document.getElementById("popup-form");
    const closeBtn = document.getElementById("close-btn");
    const newRecordForm = document.getElementById("new-record-form");
    const tableBody = document.getElementById("content");

    addRecordBtn.addEventListener("click", (e) => {
        e.preventDefault();
        popupForm.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        popupForm.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target == popupForm) {
            popupForm.style.display = "none";
        }
    });

    newRecordForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullName = document.getElementById("full-name").value;
        const type = document.getElementById("type").value;
        const initialDebt = document.getElementById("initial-debt").value;
        const paidAmount = document.getElementById("paid-amount").value;
        const owingAmount = document.getElementById("owing-amount").value;
        const currency = document.getElementById("currency").value;
        const recordDate = document.getElementById("record-date").value;
        const paybackDate = document.getElementById("payback-date").value;
        const paybackProgress = document.getElementById("payback-progress").value;

        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${fullName}</td>
            <td>${type}</td>
            <td>${initialDebt}</td>
            <td>${paidAmount}</td>
            <td>${owingAmount}</td>
            <td>${currency}</td>
            <td>${recordDate}</td>
            <td>${paybackDate}</td>
            <td>${paybackProgress}</td>
        `;

        tableBody.appendChild(newRow);

        popupForm.style.display = "none";

        newRecordForm.reset();
    });

    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.previousElementSibling.classList.add("float-label");
        });

        input.addEventListener("blur", () => {
            if (input.value === "") {
                input.previousElementSibling.classList.remove("float-label");
            }
        });

        if (input.value !== "") {
            input.previousElementSibling.classList.add("float-label");
        }
    });
});