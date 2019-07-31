//declairing Global Variables
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let currentCompLetter = letters[Math.floor(Math.random() * letters.length)];

//making user object because I love objects
const user = {
    wins: 0,
    losses: 0,
    remainingTries: 12,
    guesses: []
};

//calling the html elements
const scoreBox = document.getElementById("score-box");

//when a key is let go of 
document.onkeyup = function(event){
    const key = event.key.toLocaleLowerCase();
    console.log(currentCompLetter)
    if (key === currentCompLetter){

    } else {
        triesTools()
    }
    updateScores()
}

//to handle tries if you have guesses the wrong letter
function triesTools(){
    user.remainingTries--;
    if(user.remainingTries < 1){
        user.remainingTries = 12;
        user.guesses = [];
        user.losses++;
    }
}

//updates the scores on the page
function updateScores(){
    scoreBox.innerHTML = `
        <h3>
            Wins: ${user.wins}</br>
            Losses: ${user.losses}</br>
            Guesses Left: ${user.remainingTries}</br>
            Your Guesses So Far: ${user.guesses}
        </h3>
    `;
}
