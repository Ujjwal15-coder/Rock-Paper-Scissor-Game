let userscore = 0;
let oppScore = 0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');

const userScorePara=document.querySelector("#user-score");
const CompScorePara=document.querySelector("#opponent-score");


const genComputerChoice= () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3); //generates any random value between 0 and 1
    return options[randomIdx];
    //rock,paper,scissors
};

const drawGame=()=>{
    console.log("Game Was Draw");
    msg.innerText="Game was Draw.Better Luck Next Time Baby!";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin) 
    {
        userscore++;
        userScorePara.innerText=userscore;
    console.log("You Win!");
    msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
    msg.style.color="white";
    } 
    else
    {
        oppScore++;
        CompScorePara.innerText=oppScore;
    console.log("You Lose");
    msg.innerText=` You Lose!  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color="black";

    }


}

const playGames =(userChoice) => {
    console.log("user choice=",userChoice);
    //generate computer choice--> modular
    const compChoice = genComputerChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            //scissors,paper
            userWin=compChoice==='paper' ? false : true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors" ? false : true;

        }
        else{
            //rock,paper
            userWin = compChoice=="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGames(userChoice);
    });
});