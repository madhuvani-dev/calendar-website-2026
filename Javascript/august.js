const calendar = document.querySelector(".calendar");

const year = 2026;
const month = 7; // January (0-based)

// 1️⃣ find which day Jan 1 starts on
const firstDay = new Date(year, month, 1).getDay();

// 2️⃣ find number of days in January
const totalDays = new Date(year, month + 1, 0).getDate();

// 3️⃣ create empty boxes
for (let i = 0; i < firstDay; i++) {
  const empty = document.createElement("div");
  empty.className = "empty";
  calendar.appendChild(empty);
}

// 4️⃣ create date boxes
for (let day = 1; day <= totalDays; day++) {
  const dateDiv = document.createElement("div");
  dateDiv.className = "date";
  dateDiv.innerText = day;
  calendar.appendChild(dateDiv);
}