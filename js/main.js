let gameRunning = false;
let gamePaused = false;

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');

startBtn.addEventListener('click', () => {
  if (!gameRunning) {
    gameRunning = true;
    gamePaused = false;
    document.getElementById('displayText').style.display = 'none';
    // start game logic (e.g. start animation loop)
    console.log("Game started");
    startGameLoop();
  }
});

pauseBtn.addEventListener('click', () => {
  if (gameRunning && !gamePaused) {
    gamePaused = true;
    cancelAnimationFrame(animationId); // cancel your animation loop
    console.log("Game paused");
  }
});

resumeBtn.addEventListener('click', () => {
  if (gameRunning && gamePaused) {
    gamePaused = false;
    console.log("Game resumed");
    startGameLoop(); // resume animation loop
  }
});

// Dummy animation loop
let animationId;
function startGameLoop() {
  if (!gamePaused) {
    animationId = requestAnimationFrame(startGameLoop);
    // update game logic here
  }
}
