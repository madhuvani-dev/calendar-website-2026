const quote = document.getElementById("season-quote");

const seasons = {
  winter: {
    bg: "linear-gradient(to top, #cfd9df, #e2ebf0)",
    text: "#2c3e50",
    quote: "Winter writes in silver silence."
  },
  spring: {
    bg: "linear-gradient(to top, #d4fc79, #96e6a1)",
    text: "#1b5e20",
    quote: "Spring hums in blooming verses."
  },
  summer: {
    bg: "linear-gradient(to top, #fddb92, #d1fdff)",
    text: "#e65100",
    quote: "Summer glows in golden afternoons."
  },
  autumn: {
    bg: "linear-gradient(to top, #f6d365, #fda085)",
    text: "#4e342e",
    quote: "Autumn drifts in amber thoughts."
  }
};

// Detect season based on current month
const month = new Date().getMonth();

let currentSeason;

if ([11, 0, 1].includes(month)) currentSeason = "winter";
else if ([2, 3, 4].includes(month)) currentSeason = "spring";
else if ([5, 6, 7].includes(month)) currentSeason = "summer";
else currentSeason = "autumn";

// Apply seasonal theme
document.body.style.background = seasons[currentSeason].bg;
document.body.style.color = seasons[currentSeason].text;
quote.textContent = seasons[currentSeason].quote;
