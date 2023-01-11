//Variables
let Pseudo1 = document.getElementById("PseudoPlayer1")
let Pseudo2 = document.getElementById("PseudoPlayer2")

let Player1 = document.getElementById("Player1")
let Player2 =  document.getElementById("Player2")

let Dice = document.getElementById("Dice")
let NewGame = document.getElementById("NewGame")
let PlayerOn = 0
let RandomNumber = 0


//Entrer les noms des joueurs et remplacer player 1 et player 2 par ceux-ci
//Le joueur actif commence (par défaut joueur 1)
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
         document.location.reload()
    
})


//Changement de joueurs

function ChangePlayer() { 
    RoundScore = 0
     PlayerOn === 0 ? (PlayerOn = 1 ) : (PlayerOn = 0) 
     document.querySelector(`.player${PlayerOn}`)
     PlayerOn.classList.toggle("Active-Player");
    

// changement de couleur pour le joueur actif
     if(PlayerOn = 0){
         Player1.style.color = "red"
     } else {
         Player2.style.color = "red"
     }
   }

  
//Lancer les dés

let RoundScore = 0
  
Dice.addEventListener('click', () =>{
  let RandomNumber = Math.floor(Math.random()*6) + 1
Dice.innerHTML = `<img  src="./media/dice_${RandomNumber}.png" alt="dice_${RandomNumber}">`;

if (RandomNumber !== 1){
    RoundScore += RandomNumber
    document.querySelector(`#RoundPlayer${PlayerOn}`).textContent = RoundScore
    
    
} else {
    ChangePlayer()
}

})



//Score globale

globaleScore = function (){
    let GlobaleScore
    GlobaleScore += RoundScore
}




