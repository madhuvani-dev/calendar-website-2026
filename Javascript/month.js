// ===============================
// UNIVERSAL MONTH SCRIPT
// ===============================

const year = 2026;

// Get month from HTML (0–11)
const monthIndex = parseInt(document.body.dataset.month);

const holidayData = {
  0: [
    { day: 1, name: "New Year's Day" },
    { day: 14, name: "Sankranti" },
    { day: 15, name: "Kanuma" },
    { day: 16, name: "Mukkanuma" },
    { day: 26, name: "Republic Day" }
  ],
  1: [{ day: 15, name: "Mahasivaratri" }],
  2: [{ day: 3, name: "Holi" },
    {day: 19, name: "Ugadi"},
    {day: 21, name: "Ramzan"},
    {day: 26, name: "Rama Navami"}
  ],
  3: [
    { day: 3, name: "Good Friday" },
  ],
  4: [{ day: 27, name: "Bakrid" }],
  5: [{day: 26, name: "Muharram"}],
  6: [],
  7: [
    { day: 15, name: "Independence Day" },
    { day: 28, name: "Rakhi" }
  ],
  8: [
    { day: 14, name: "Ganesha Chaturthi" }
  ],
  9: [{ day: 2, name: "Gandhi Jayanti" },
    {day: 20, name: "Dussehra" }
  ],
  10: [{ day: 8, name: "Diwali" }],
  11: [{ day: 25, name: "Christmas" }]
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
  const holiday = holidays.find(h => h.day === day);

if (holiday) {
  dateDiv.classList.add("holiday");

  dateDiv.setAttribute("title", holiday.name);

  const holidayLabel = document.createElement("div");
  holidayLabel.classList.add("holiday-name");
  holidayLabel.textContent = holiday.name;

  dateDiv.appendChild(holidayLabel);
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




