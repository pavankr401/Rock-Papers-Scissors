const userOption = document.getElementById('user-option');
const compOption = document.getElementById('comp-option');
const imagesHolder = document.getElementById('images-holder');
const userPoints = document.querySelector('#userScore');
const compPoints = document.querySelector('#compScore');
const popup = document.getElementById('popup');
let userSelected;
let compSelected;
let userScore;
let compScore;
const imgArr = ["<img class='0' src='./images/Rock.png' alt='Rock'>", 
                "<img class='1' src='./images/Scissor.png' alt='Scissor'>",
                "<img class='2' src='./images/Paper.png' alt='Paper'>" ]



function startGame()
{
  popup.style.display = 'none';
  userScore = 0;
  compScore = 0;
  userPoints.innerHTML = userScore;
  compPoints.innerHTML = compScore;
  imagesHolder.addEventListener('click', handleClick);
}
startGame();

function handleClick(event)
{
  switch(event.target.id)
  {
    case "0":
      userOption.innerHTML = imgArr[0];
      userSelected = "rock";
      break;
    case "1":
      userOption.innerHTML = imgArr[1];
      userSelected = "scissor";
      break;
    case "2":
      userOption.innerHTML = imgArr[2];
      userSelected = "paper";
      break;
  }
  let ind = Math.floor(Math.random() * 3);
  if(ind == 0) compSelected = 'rock';
  if(ind == 1) compSelected = 'scissor';
  if(ind == 2) compSelected = 'paper';
  compOption.innerHTML = imgArr[ind];

  givePoints(userSelected, compSelected);
  if(checkWin()) gameOver();
}

function givePoints(user, comp)
{
  if(user == 'rock' && comp == 'paper') compScore++;
  if(user == 'rock' && comp == 'scissor') userScore++;
  if(user == 'paper' && comp == 'rock') userScore++;
  if(user == 'paper' && comp == 'scissor') compScore++;
  if(user == 'scissor' && comp == 'rock') compScore++;
  if(user == 'scissor' && comp == 'paper') userScore++;

  userPoints.innerHTML = userScore;
  compPoints.innerHTML = compScore;
}

function checkWin()
{
  if(userScore == 5)
  {
    popup.style.display = 'block';
    popup.innerText = 'USER WINS :)';
    return true;
  }
  if(compScore == 5)
  {
    popup.style.display = 'block';
    popup.innerText = 'COMP WINS :(';
    return true;
  }

  return false;
}

function gameOver()
{
  imagesHolder.removeEventListener('click', handleClick);
}