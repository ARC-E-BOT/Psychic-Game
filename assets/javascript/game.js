//declairing Global Variables
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let currentCompLetter = letters[Math.floor(Math.random() * letters.length)];
let errorMsg = "";

//making user object because I love objects
const user = {
    wins: 0,
    losses: 0,
    remainingTries: 12,
    guesses: []
};

//calling the html elements
const scoreBox = document.getElementById("score-box");

//starting the score box when the page loads
updateScores();

//when a key is let go of check for winning key or an error 
document.onkeyup = function(event){
    let key = event.key.toLocaleLowerCase();
    errorMsg = "";
    if(!user.guesses.includes(key) && letters.includes(key)){
        if (key === currentCompLetter){
            winningLetter();
        } else {
            user.guesses.push(key);
            triesTools();
        }
    } else {
        if (!letters.includes(key)) {
            if (key === " ") key = "space";
            errorMsg = `<a class="error-message">ERROR: you have guessed an incorrect key: ${key}</a>`;
        } else {
            errorMsg = `<a class="error-message">ERROR: you have already guessed: ${key}</a>`;
        }
    }
    updateScores();
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

//handles the winning letter 
function winningLetter(){
    user.wins++;
    user.remainingTries = 12;
    user.guesses = [];
    currentCompLetter = letters[Math.floor(Math.random() * letters.length)];
    errorMsg = `<a class="winning-message">WINNER!</a>`;
}

//updates the scores on the page
function updateScores(){
    scoreBox.innerHTML = `
        <h3>
            Wins: ${user.wins}</br>
            Losses: ${user.losses}</br>
            Guesses Left: ${user.remainingTries}</br>
            Your Guesses So Far: ${user.guesses}</br></br>
            ${errorMsg}
        </h3>
    `;
}
