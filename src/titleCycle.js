function cycleWords() {
  const words = [
    { text: "Horror?", font: "HorrorFont" },
    { text: "SciFi?", font: "SciFiFont" },
    { text: "Comedy?", font: "ComedyFont" },
    { text: "Thriller?", font: "ThrillerFont" },
    { text: "Western?", font: "WesternFont" },
    { text: "Action?", font: "ActionFont" },
    { text: "Romance?", font: "RomanceFont" },
    { text: "Drama?", font: "DramaFont" },
    { text: "Mystery?", font: "MysteryFont" },
    { text: "Fantasy?", font: "FantasyFont" },
    { text: "Musical?", font: "MusicalFont" },
  ];

  const cycleTextElement = document.getElementById("cycleText");
  let currentIndex = 0;

  function updateText() {
    const { text, font } = words[currentIndex];
    const categoryElement = document.createElement("span");
    categoryElement.textContent = text;
    categoryElement.className = "category " + font;
    cycleTextElement.innerHTML = "";
    cycleTextElement.appendChild(categoryElement);
    currentIndex = (currentIndex + 1) % words.length;
  }

  updateText();


  const interval = setInterval(updateText, 200);


  setTimeout(() => {
    clearInterval(interval);
    cycleTextElement.innerHTML = "<span class='category NightInFont'>NightIn?</span>";
  }, 6000);
}

cycleWords();
