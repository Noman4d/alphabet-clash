function play() {
  hideElementsById("home-section");
  showElementById("play-ground");
  continueGame();
}

function continueGame(params) {
  const alphabet = getRandomAlphabets();
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  addBackgroundColorById(alphabet);
}

function handleButtonByPress(event) {
  const playerPressed = event.key;

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase()
  

  if (playerPressed===expectedAlphabet) {
    continueGame()
    removeBackgroundColorById(expectedAlphabet);
    const currentScoreElement = document.getElementById('current-score')
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;
  }
  else{
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    const reduceLife = currentLife - 1 ; 
    currentLifeElement.innerText = reduceLife ; 

    if (reduceLife===0) {
      gameOver()
    }

  }
}
function gameOver() {
  hideElementsById('play-ground')
  showElementById('score-page')
}
document.addEventListener("keyup", handleButtonByPress);
