// function play(){
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');

//   const playgroundSection = document.getElementById('play-ground');
//   playgroundSection.classList.remove('hidden');
// }
function handleKeyboardKeyupEvent(event){
  const pressedKey = event.key;
  if(pressedKey === 'Escape'){
    gameOver()
  }


  const showedKey = document.getElementById('current-alphabet');
  const getKey = showedKey.innerText
  const expectedKey = getKey.toLowerCase();

  if(pressedKey === expectedKey){
    console.log('you got a point');
    
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;

    const currentScore = getElementValueById('current-score');
    const updatedScore = currentScore + 1;

    setElementValueById('current-score', updatedScore);

    removeBackgroundById(expectedKey);
    continueGame();
  }
else{
  console.log('you have lost a life');

  const currentLife = getElementValueById('current-life');
  const updatedLife = currentLife - 1;
  setElementValueById('current-life', updatedLife);

  if(updatedLife === 0){
    gameOver()
    
  }

  // ----------------------------------
  // const currentLifeElement = document.getElementById('current-life');
  // const currentLifeText = currentLifeElement.innerText;
  // const currentLife = parseInt(currentLifeText);

  // const newLife = currentLife - 1;
  // currentLifeElement.innerText = newLife;
}
}


document.addEventListener('keyup', handleKeyboardKeyupEvent);

function continueGame(){
  const alphabet = getArandomAlphabet();

  console.log('your current alphabet is', alphabet);

  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;
  
  setBackgroundById(alphabet);
} 



function play(){
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementById('play-ground');

  setElementValueById('current-life', 5)
  setElementValueById('current-score', 0)
 

  continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');

  const lastScore = getElementValueById('current-score');
  setElementValueById('last-score', lastScore);

  const currentAlphabet = getElementTextById('current-alphabet');
  
  removeBackgroundById(currentAlphabet);
}