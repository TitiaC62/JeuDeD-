
//Variables
let Pseudo1 = document.getElementById("PseudoPlayer1")
let Pseudo2 = document.getElementById("PseudoPlayer2")

let RoundPlayer1 = document.getElementById("RoundPlayer1")
let RoundPlayer2 = document.getElementById("RoundPlayer2")

let GlobalScore1 = document.getElementById("GlobalScore1")
let GlobalScore2 = document.getElementById("GlobalScore2")

let RollDice = document.getElementById("RollDice")
let Dice = document.getElementById("Dice")
let NewGame = document.getElementById("NewGame")



//Entrer les noms des joueurs et remplacer player 1 et player 2 par ceux-ci
//Le joueur actif commence
// Cliquer sur le dé: avoir un chiffre entre 1 et 6
// Si le dé est différent de 1 => ajouter au score temporaire
//Verifier que le joueur <= 100
//Recommencer tant que dé !== 1
// si dé = 1 changer de joueur actif
// sinon player >=100 = win
// Ajouter le score temporaire au score global



//Entrer le nom des joueurs

function afficher(){
    let Pseudo1 = document.getElementById("PseudoPlayer1").value;
    
    document.getElementById("Player1").value = Pseudo1 ;
    Player1.innerHTML = Pseudo1
   
    let Pseudo2 = document.getElementById("PseudoPlayer2").value;
    document.getElementById("Player2").value = Pseudo2 ;
   Player2.innerHTML = Pseudo2
        }
   

//New game

NewGame.addEventListener('click', () => {
    RoundPlayer1.textContent = 0
    RoundPlayer2.textContent = 0
    
    GlobalScore1.textContent = 0
    GlobalScore2.textContent = 0

    
})




