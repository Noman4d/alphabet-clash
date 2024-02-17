function play() {
  hideElementsById("home-section");
  showElementById("play-ground");
  continueGame();
}

function continueGame(params) {
  const alphabet = getRandomAlphabets();
  console.log(alphabet);
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;
}
