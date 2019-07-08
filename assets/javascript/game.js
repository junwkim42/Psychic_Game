//--------- Variables -----------
// win, lose, guessCount : count of wins, loses and remaining guesses
// wintxt, losetxt, guesstxt, urguesses : 

var win = 0;
var lose = 0;
var guessCount = 9;
var wintxt = document.getElementById("#winid");
var losetxt = document.getElementById("#loseid");
var guesstxt = document.getElementById("#guesscount");
var urguesses = document.getElementById("#urguess");
var compick = computerpick();

//---------- Functions ----------
// computerpick
// picks one ascii value from a(97) to z(122) inclusive.
// convert it to character and return
function computerpick(){
    function randascii(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var pickone = randascii(97, 122);
    return String.fromCharCode(pickone);
}

// on user keypress
// if user key matches computer generated letter
// -> increment win count and update html
// -> alet "Good Job!"
// -> reset guesscount, remaining guess, user guess history and generate new character
// -> return
// if user key does not match
// -> decrement guessCount
// -> update remaining guess section (Guesses left:)
// -> append user key to guess history (Your guesses so far)
// If remaining guess count is < 1  (= 0)
// -> alert user of computer generated number
// -> increment lose count and update text on html
// -> generate new letter for next game
// -> reset user guess history, remaining guess to 9 and update remaining guess text
// -> return
document.onkeypress = function (event){
    var userpick = (event.key).toLowerCase();
    if (userpick == compick){
        win++;
        wintxt.innerHTML = "Wins: " + win;
        alert("GOOD JOB!");
        guessCount = 9;
        guesstxt.innerHTML = "Guesses Left: 9";
        urguesses.innerHTML = "Your Guesses so far:"
        compick = computerpick();
        return ;
    }
    else{
        guessCount--;
        guesstxt.innerHTML = "Guesses Left: " + guessCount;
        urguesses.append(userpick);
    }
    if (guessCount < 1){
        alert("COMPUTER PICK WAS : " + compick);
        lose++;
        losetxt.innerHTML = "Loses: " + lose;
        compick = computerpick();
        urguesses.innerHTML = "Your Guesses so far:"
        guessCount = 9;
        guesstxt.innerHTML = "Guesses Left: 9";
        return ;
    }
}