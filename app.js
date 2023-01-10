
//Variables
const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")

const RoundPlayer1 = document.getElementById("RoundPlayer1")
const RoundPlayer2 = document.getElementById("RoundPlayer2")

const globalScore1 = document.getElementById("globalScore1")
const globalScore2 = document.getElementById("globalScore2")

const rollDice = document.getElementById("rollDice")
const newGame = document.getElementById("newGame")


let randomNumber = 0


//Entrer les noms des joueurs



//Lancer les dés
 Dice = function () {
    let randomNumber = 0
    randomNumber = Math.floor(Math.random() * 6) + 1;
};

console.log(rollDice)

//Score temporaire 




//Score globale




//New game

newGame.addEventListener('click', () => {
    RoundPlayer1.textContent = 0
    RoundPlayer2.textContent = 0
    
    globalScore1.textContent = 0
    globalScore2.textContent = 0
    
})

