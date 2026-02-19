// ===============================
// UNIVERSAL MONTH SCRIPT
// ===============================

const year = 2026;

// Get month from HTML (0–11)
const monthIndex = parseInt(document.body.dataset.month);

// Month-specific holidays
const holidayData = {
  0: [1,14,15,16, 26],      // January
  1: [15],         // February
  2: [8],          // March
  3: [19,21,27],         // April
  4: [3],          // May
  5: [],           // June
  6: [],           // July
  7: [15,28],         // August
  8: [4,14],           // September
  9: [20],          // October
  10: [8],          // November
  11: [25]         // December
};
// Birthday data: monthIndex → [{ day, name }]
const birthdayData = {
  9: [{ day: 17, name: "Anu" }],        
  5: [{ day: 28, name: "Nani" }],           
  4: [{ day: 9, name: "Anniversary" }]    
};

const birthdays = birthdayData[monthIndex] || [];


const holidays = holidayData[monthIndex] || [];

const calendar = document.querySelector(".calendar");

// First day of month
const firstDay = new Date(year, monthIndex, 1).getDay();

// Total days in month
const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

// Empty cells before 1st
for (let i = 0; i < firstDay; i++) {
  const emptyDiv = document.createElement("div");
  emptyDiv.classList.add("empty");
  calendar.appendChild(emptyDiv);
}

// Today's date
const today = new Date();
const isCurrentMonth =
  today.getFullYear() === year && today.getMonth() === monthIndex;

// Generate dates
for (let day = 1; day <= daysInMonth; day++) {
  const dateDiv = document.createElement("div");
  dateDiv.classList.add("date");
  dateDiv.textContent = day;

  const currentDate = new Date(year, monthIndex, day);
  const dayOfWeek = currentDate.getDay();

  // Weekend highlight
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    dateDiv.classList.add("weekend");
  }

  // Holiday highlight
  if (holidays.includes(day)) {
    dateDiv.classList.add("holiday");
  }

  // Today highlight
  if (isCurrentMonth && day === today.getDate()) {
    dateDiv.classList.add("today");
  }
  // Birthday highlight
const birthday = birthdays.find(b => b.day === day);

if (birthday) {
  dateDiv.classList.add("birthday");
  dateDiv.setAttribute("title", birthday.name + "'s Birthday 🎂");
  dateDiv.innerHTML += " 🎂";
}


  calendar.appendChild(dateDiv);
}




