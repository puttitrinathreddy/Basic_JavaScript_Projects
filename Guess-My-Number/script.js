'use strict';

// displayMessage( '🥳Correct Number!🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);

// when there is no input
if(!guess){
 displayMessage('⛔ No number!! ⛔');

// when player wins
} else if(guess === secretNumber){
displayMessage( '🎉!Congratulations!🎉  🥳!Right on spot!🥳'); 
document.querySelector('.number').textContent = secretNumber;

// to change the background color
document.querySelector('body').style.backgroundColor = '#60b347';

// To change the width
document.querySelector('.number').style.width = '30rem';

if(score > highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
}
// when the quess is wrong

} else if(guess !== secretNumber){
 if(score > 1){
       displayMessage( guess > secretNumber? `😑 it's too 📈 high!!` :  `🙄 Try again  it's too 📉 low`);
    score--;
    document.querySelector('.score').textContent = score; 
// when player score is 0(score === 0)
    }else {
        displayMessage( 'F😶😶k off you lost 😣 the game');
        document.querySelector('.score').textContent = 0; 
    }
}
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage( 'Start guessing...');
    document.querySelector('.score').textContent  = score;
    document.querySelector('.number').textContent  = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})
