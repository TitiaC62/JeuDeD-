//Variables
let Pseudo1 = document.getElementById("PseudoPlayer1")
let Pseudo2 = document.getElementById("PseudoPlayer2")

let Player1 = document.getElementById("Player1")
let Player2 =  document.getElementById("Player2")

let GlobaleScore0 = document.getElementById("GlobaleScore0")
let GlobaleScore1 = document.getElementById("GlobaleScore1")

let Dice = document.getElementById("Dice")
let NewGame = document.getElementById("NewGame")
let Hold = document.getElementById("Hold")

let PlayerOn = 0
let RoundScore = 0
let RandomNumber = 0
let GlobaleScorePlayer0 = 0
let GlobaleScorePlayer1 = 0

Player1.style.color = "red"

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

// changement de couleur pour le joueur actif
     if(PlayerOn === 0){
        
         Player1.style.color = "red"
         Player2.style.color = "black"
     } else {
         Player2.style.color = "red"
         Player1.style.color ="black"
     }
   }

  
//Lancer les dés


  
Dice.addEventListener('click', () =>{
  let RandomNumber = Math.floor(Math.random()*6) + 1
Dice.innerHTML = `<img  src="./media/dice_${RandomNumber}.png" alt="dice_${RandomNumber}">`;

if (RandomNumber !== 1){
    RoundScore += RandomNumber
    document.querySelector(`#RoundPlayer${PlayerOn}`).textContent = RoundScore
    
} else {
    document.querySelector(`#RoundPlayer${PlayerOn}`).textContent = 0    
    ChangePlayer()
}

})



//Score globale


// Si joueur actif clique sur HOLd => ajouter ROUND à GLOBALE

    Hold.addEventListener('click', () =>{
        document.querySelector(`#RoundPlayer${PlayerOn}`).textContent = 0 
        if(PlayerOn === 0){
            GlobaleScorePlayer0 += RoundScore
            document.querySelector(`#GlobalScore${PlayerOn}`).textContent = GlobaleScorePlayer0
        }else{
            GlobaleScorePlayer1 += RoundScore
            document.querySelector(`#GlobalScore${PlayerOn}`).textContent = GlobaleScorePlayer1
        }

        if(GlobaleScorePlayer0 >= 100){ 
            alert(`${Player1.textContent} a gagné ! `)
            console.log(Player1.textContent)
        }

        if(GlobaleScorePlayer1 >= 100){ 
            alert(`${Player2.textContent} a gagné ! `)
        }

        ChangePlayer()

    })
    

// Si joueur actif = 100 => Win



