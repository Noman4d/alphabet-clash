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

function setElementValueById(elementId,value) {
  const elemet = document.getElementById(elementId);
  elemet.innerText = value ; 
}
function getTextelementById(elementId) {
      const element = document.getElementById(elementId);
      const elementValueText = element.innerText;
      const value = parseInt(elementValueText);
      return value;
}
function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}