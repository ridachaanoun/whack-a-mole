const menu = document.querySelector(".menu"); // Updated to match your menu ID
const startBtn = document.querySelector(".btn");
const level = document.querySelector(".level");
const main = document.querySelector("main");
const score = document.getElementById("score");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const levelco = document.querySelector(".level");
const mole = document.querySelectorAll('.mole-head');

let stopGame = false;
let scoreValue = 0;
let interval;

// Start Game Function
function startGame() {
    stopGame = false;
    scoreValue = 0;
    score.textContent = scoreValue;

    // Add navigation styling to the menu
    menu.classList.add("nav-style");

    // Hide the start button 
    startBtn.style.display = "none";
    levelco.style.marginTop = "0";

    // Show the main game area
    main.classList.remove("hidden");

    // Show score, stop, and reset controls
    score.classList.remove("hidden");
    stopBtn.classList.remove("hidden");
    resetBtn.classList.remove("hidden");

    // Add click events to each mole-head for scoring
    mole.forEach((moleHead, index) => {
        moleHead.addEventListener("click", () => {
            if (moleHead.style.top === "0px") { // Check if mole is "out"
                scoreValue++;
                score.textContent = scoreValue;
                moleHead.style.top = "160px"; // Move back down after hit
            }
        });
    });

    // Start mole movement
    interval = setInterval(() => {
        if (!stopGame) {
            let index = Math.floor(Math.random() * mole.length);
            moveOut(index);
        }
    }, 2200 - scoreValue * 500); // Speed up as score increases
}

// Level Selection
let holes = 3;
levelco.addEventListener("click", () => {
    const lvl = document.querySelector("#level").value;
    console.log(lvl);

    if (lvl === "Medium") holes = 6;
    else if (lvl === "Hard") holes = 9;
});

// Move Mole Out Function
function moveOut(index) {
    mole[index].style.top = '0px'; // Show the mole
    setTimeout(() => moveIn(index), 1000 - scoreValue * 100); // Move it back in after 1 second
}

// Move Mole In Function
function moveIn(index) {
    mole[index].style.top = '160px'; // Hide the mole
}

// Stop Game Function
stopBtn.addEventListener("click", () => {
    stopGame = true;
    clearInterval(interval);
    startBtn.style.display = "block"; // Show start button again
});

// Reset Game Function
resetBtn.addEventListener("click", () => {
    stopGame = true;
    clearInterval(interval);
    scoreValue = 0;
    score.textContent = scoreValue;
    startBtn.style.display = "block";
    mole.forEach(moleHead => moleHead.style.top = "160px"); // Hide all moles
});
