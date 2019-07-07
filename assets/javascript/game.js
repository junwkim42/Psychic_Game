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
// 
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