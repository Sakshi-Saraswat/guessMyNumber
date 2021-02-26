'use strict';

const magicNumber=Math.floor(Math.random()*20+1);
const secretNumber=document.querySelector('.number');
const btnCheck=document.querySelector('.btncheck');
const gameScore=document.querySelector('.score');
const highScore=document.querySelector('.highscore');
const userMessage=document.querySelector('.message');
const btnAgain=document.querySelector('.btnagain');
let score=20;
let highscore=0;
btnCheck.addEventListener('click',function(){
    
    const userNumber=Number(document.querySelector('.guess').value);
    if(userNumber>0)
    {
        if(score!=0)
        {
            if(userNumber>magicNumber)
            {
                userMessage.textContent="You are too high";
                score--;
                gameScore.textContent=score;
        
            }
            else if(userNumber==magicNumber)
            {
                secretNumber.textContent=magicNumber;
                userMessage.textContent="👏 you are correct";
                highScore.textContent=score;
                document.body.style.backgroundColor='green';
                secretNumber.style.width="30rem";
            }
            else if(userNumber<magicNumber)
            {
                userMessage.textContent="you are too low";
                score--;
                gameScore.textContent=score;
            }

        }
        else
        {
            document.body.style.backgroundColor='red';
            userMessage.textContent="you lost!!";
        }
        

    }
    else
    {
        console.log("Please enter a valid number between 1 to 20");
    }  
}); 
btnAgain.addEventListener('click',function fun1(){
    let score=20;
    gameScore.textContent=score;
    document.body.style.backgroundColor='rgb(34,34,34)';
    secretNumber.style.width="15rem";
    userMessage.textContent="Start guessing...";
    secretNumber.textContent="?";

});