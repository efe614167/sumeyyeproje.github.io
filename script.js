let timeLeft = 3;
const timer = document.getElementById("timer");
const countdown = document.getElementById("countdown");
const mainContent = document.getElementById("mainContent");

const interval = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft === 0) {
        clearInterval(interval);
        countdown.classList.add("hidden");
        mainContent.classList.remove("hidden");
    }
}, 1000);

function startSurprise() {
    document.getElementById("mainContent").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");

    const music = document.getElementById("music");
    music.play();

    setInterval(createHeart, 300);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
