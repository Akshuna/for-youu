// 🔥 NEW YEAR TIME — EXACTLY 12:00 AM
const unlockTime = Date.now() - 1000;

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

function showScreen(id) {
  document.getElementById("screen-locked").style.display = "none";
  document.getElementById("screen-unlock").style.display = "none";
  document.getElementById("screen-story").style.display = "none";

  document.getElementById(id).style.display = "block";
}

function startStory() {
  showScreen("screen-story");
}
const pages = [
  {
    image: "https://placekitten.com/400/500",
    text: "She moves like quiet certainty, not loud enough to ask for attention, strong enough to keep it."
  },
  {
    image: "https://placekitten.com/401/500",
    text: "Her smile doesn’t promise anything — it simply stays, long after she’s gone."
  },
  {
    image: "https://placekitten.com/402/500",
    text: "I love her the way thoughts repeat at night — uninvited, relentless, honest."
  },
  {
    image: "https://placekitten.com/403/500",
    text: "If this year gave me one true thing, it was her name settling somewhere it refuses to leave. ~parthivi"
  }
];


let currentPage = 0;

function startStory() {
  currentPage = 0;
  showPage();
}

function showPage() {
  document.getElementById("storyImage").src = pages[currentPage].image;
  document.getElementById("storyText").innerText = pages[currentPage].text;
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage();
  }
}

