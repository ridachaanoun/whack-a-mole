function startGame() {
    const menu = document.querySelector(".menu"); // Updated to match your menu ID
    const startBtn = document.querySelector(".btn");
    const level = document.querySelector(".level");
    const main = document.querySelector("main");

    // Add navigation styling to the menu
    menu.classList.add("nav-style");

    // Hide the start button 
    startBtn.style.display = "none";
    document.querySelector(".level").style.marginTop = "0";


    // Show the main game area
    main.classList.remove("hidden");

    // Show score, stop, and reset controls
    const score = document.getElementById("score");
    const stopBtn = document.querySelector(".stop");
    const resetBtn = document.querySelector(".reset");

    score.classList.remove("hidden");
    stopBtn.classList.remove("hidden");
    resetBtn.classList.remove("hidden");

}
