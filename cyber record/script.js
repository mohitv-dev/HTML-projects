// Get shop name from HTML attribute
const shop = document.body.dataset.shop;
const STORAGE_KEY = shop === "cyber" ? "cyberRecords" : "vindhRecords";

const form = document.querySelector("form");
const dateInput = document.getElementById("date");
const incomeInput = document.getElementById("income");
const expenseInput = document.getElementById("expense");
const noteInput = document.getElementById("note");
const tableBody = document.querySelector("#recordTable tbody");

// Set today's date
dateInput.value = new Date().toISOString().split("T")[0];

// Load records
function loadRecords() {
  tableBody.innerHTML = "";
  const records = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  records.forEach(entry => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.date}</td>
      <td>₹${entry.income}</td>
      <td>₹${entry.expense}</td>
      <td>${entry.note || ""}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Handle submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newEntry = {
    date: dateInput.value,
    income: incomeInput.value,
    expense: expenseInput.value,
    note: noteInput.value
  };

  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  existing.push(newEntry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

  form.reset();
  dateInput.value = new Date().toISOString().split("T")[0];
  loadRecords();
});

loadRecords();