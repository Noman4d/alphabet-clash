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
function addBackgroundColorById(elementsId) {
  const element = document.getElementById(elementsId);
  element.classList.add('bg-orange-400')
}
function removeBackgroundColorById(elementsId) {
  const element = document.getElementById(elementsId);
  element.classList.remove('bg-orange-400')
}
