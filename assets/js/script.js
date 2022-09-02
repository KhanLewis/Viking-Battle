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
      alert("you clicked sword")

    } else if (this.getAttribute("data-weapons") === "shield") {
      alert("You clicked shield")

    } else if (this.getAttribute("data-weapons") === "axe") {
      alert("You clicked axe")

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

  incrementScore()
}



function incrementScore() {
  if (playersWeapon === computersWeapon) {
    console.log('its a draw');
    ++battlesWon.innerText;
    ++battlesLost.innerText 

  }else if(playersWeapon === 'sword' && computersWeapon === 'shield'){
    console.log('computer wins');
    ++battlesLost.innerText;

  }else if(playersWeapon === 'axe' && computersWeapon === 'shield'){
    console.log('player wins');
    ++battlesWon.innerText;

  }else if(playersWeapon === 'shield' && computersWeapon === 'sword'){
    console.log('player wins');
    ++battlesWon.innerText;

  }else if(playersWeapon === 'sword' && computersWeapon === 'axe'){
    console.log('player wins');
    ++battlesWon.innerText;

  }else if(playersWeapon === 'shield' && computersWeapon === 'sword'){
    console.log('player wins');
    ++battlesWon.innerText;
    
  }else if(playersWeapon === 'shield' && computersWeapon === 'axe'){
    console.log('computer wins');
    ++battlesLost.innerText;

  }else if(playersWeapon === 'axe' && computersWeapon === 'sword'){
    console.log('computer wins');
    ++battlesLost.innerText;
  }

}

