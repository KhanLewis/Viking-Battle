/**
 * declares all the constants used to function
 * the game 
 */

const weapons = document.getElementsByClassName('weapon');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const battlesWon = document.getElementById('won');
const battlesLost = document.getElementById('lost');
const playerHealthBar = document.getElementById('player-healthbar');
const computerHealthBar = document.getElementById('computer-healthbar');
let playersWeapon;
let randomWeapon;
let computersWeapon;

for (playersWeapon of weapons) {

  playersWeapon.addEventListener('click', function () {
    if (this.getAttribute("data-weapons") === "sword") {
      
    } else if (this.getAttribute("data-weapons") === "shield") {
      
    } else if (this.getAttribute("data-weapons") === "axe") {
      
    } else {
      console.log('ERROR WITH WEAPON SELECTION')
    }
    playersWeapon = this.getAttribute("data-weapons");
    console.log(playersWeapon)
    playGame(playersWeapon)
  })



}


function playGame(playersWeapon) {

  randomWeapon = Math.floor(Math.random() * weapons.length);
  if (randomWeapon === 0) {
    computersWeapon = "sword";
  }
  if (randomWeapon === 1) {
    computersWeapon = "shield";
  }
  if (randomWeapon === 2) {
    computersWeapon = "axe";
  };
  console.log(computersWeapon)

  incrementScore();
  playersHealth();
  displayMessage();
}



function incrementScore() {

// a draw 
  if (playersWeapon === computersWeapon) {
    console.log('its a draw');
    alert(`Its a Draw! you both chose ${playersWeapon}`)
    ++battlesWon.innerText;
    ++battlesLost.innerText 

// chances for player to win

  }else if(playersWeapon === 'axe' && computersWeapon === 'shield'){
    console.log('player wins');
    alert(`YES You won , You chose ${playersWeapon} and your opponent chose ${computersWeapon}`)
    ++battlesWon.innerText;

  }else if(playersWeapon === 'shield' && computersWeapon === 'sword'){
    console.log('player wins');
    alert(`YES You won , You chose ${playersWeapon} and your opponent chose ${computersWeapon}`)
    ++battlesWon.innerText;

  }else if(playersWeapon === 'sword' && computersWeapon === 'axe'){
    console.log('player wins');
    alert(`YES You won , You chose ${playersWeapon} and your opponent chose ${computersWeapon}`)
    ++battlesWon.innerText;

// chance for computer to win 

  }else if(playersWeapon === 'sword' && computersWeapon === 'shield'){
    console.log('computer wins');
    alert(`OH NO,You lost! You chose ${playersWeapon} and your opponent chose ${computersWeapon}`)
    ++battlesLost.innerText;

  }else if(playersWeapon === 'shield' && computersWeapon === 'axe'){
    console.log('computer wins');
    alert(`OH NO,You lost! You chose ${playersWeapon} and your opponent chose ${computersWeapon}`)
    ++battlesLost.innerText;

  }else if(playersWeapon === 'axe' && computersWeapon === 'sword'){
    console.log('computer wins');
    alert(`OH NO,You lost! You chose ${playersWeapon} and your opponent chose ${computersWeapon}`)
    ++battlesLost.innerText;
  }
  
}


function playersHealth(){
  if (playerHealthBar == 0) {
    gameOver()
  }else if(playerHealthBar == 1){
    playerHealthBar.innerText = '❤️';
  }
  }
  
  // for(heart of playerHealthBar){
  //   if(++battlesLost.innerText){
  //     heart.remove(innerText)
  //     }
  // }

