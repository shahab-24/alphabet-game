function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function setBackgroundById(elementId){
  const alphabetById = document.getElementById(elementId);
  alphabetById.classList.add('bg-orange-400');
}
function removeBackgroundById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}

function getElementValueById(elementId){
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;

}

function setElementValueById(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;

}

function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}




function getArandomAlphabet(){
  const randomAlphabets = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = randomAlphabets.split('');
  

  const getRandomNumber = Math.random()*25;
  const index = Math.round(getRandomNumber);
  const alphabet = alphabets[index];
  return alphabet;
}