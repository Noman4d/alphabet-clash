function hideElementsById(elementsId) {
  const elements = document.getElementById(elementsId);
  elements.classList.add("hidden");
}

function showElementById(elementsId) {
  const elements = document.getElementById(elementsId);
  elements.classList.remove("hidden");
}

function getRandomAlphabets() {
  const alphaberString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphaberString.split('');

  const randomNumbers = Math.random()*25;
  const index = Math.round(randomNumbers);
  
  const alphabet = alphabets[index];
  return alphabet;

  
}