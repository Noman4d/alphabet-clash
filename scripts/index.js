function play() {
  hideElementsById("home-section");
  showElementById("play-ground");
  continueGame();
}

function continueGame(params) {
  const alphabet = getRandomAlphabets();
  console.log(alphabet);
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  addBackgroundColorById(alphabet);
}

function handleButtonByPress(event) {
  const playerPressed = event.key;

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase()
  console.log(playerPressed,currentAlphabet);

  if (playerPressed===expectedAlphabet) {
    continueGame()
    removeBackgroundColorById(expectedAlphabet);
  }
  else{
    console.log('oh missed!');
  }
}

document.addEventListener("keyup", handleButtonByPress);
