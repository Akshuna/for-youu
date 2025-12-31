// 🔥 NEW YEAR TIME — EXACTLY 12:00 AM
const unlockTime = new Date("Jan 1, 2026 00:00:00").getTime();

// ✍️ PERSONAL MESSAGE (you can change this later)
const personalMessage = [
  "Hey 👋",
  "If you're reading this, it's finally New Year.",
  "I made this just for you.",
  "Happy New Year 🎆"
];

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function updateCountdown() {
  const now = Date.now();
  const diff = unlockTime - now;

  if (diff <= 0) {
    showScreen("screen-unlock");

    setTimeout(() => {
      showScreen("screen-message");
      typeMessage();
    }, 1600);

    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

function typeMessage() {
  const el = document.getElementById("message");
  el.innerHTML = "";

  let line = 0;
  let char = 0;

  const typing = setInterval(() => {
    if (line >= personalMessage.length) {
      clearInterval(typing);
      return;
    }

    el.innerHTML += personalMessage[line][char] || "";
    char++;

    if (char === personalMessage[line].length) {
      el.innerHTML += "<br><br>";
      line++;
      char = 0;
    }
  }, 40);
}

setInterval(updateCountdown, 1000);
updateCountdown();
