
const getComputerChoice=function(){
    let n=Math.random();
    if(n<1/3)return "ROCK";
    else if(n>=1/3 && n<2/3)return "PAPER";
    else{
        return "SCISSOR";
    }
}

const getHumanChoice=function (){
    let choice =prompt("Choose one Rock/Paper/Scissor");
    return choice.toUpperCase();
}


let humanscore=0;
let computerscore=0;

function playround(humanchoice,computerchoice,round){
    if(humanchoice===computerchoice){
        console.log("TIE!");
    }
    if(humanchoice=="ROCK"){
        if(computerchoice=="SCISSOR")humanscore++;
        else{
            computerscore++;
        }
    }
    else if(humanchoice=="PAPER"){
        if(computerchoice=="SCISSOR")computerscore++;
        else humanscore++;
    }
    else if(humanchoice=="SCISSOR"){
        if(computerchoice=="PAPER")humanscore++;
        else computerscore++;
    }
    console.log(`Scores at end of ${round} are`);
    console.log(`computer: ${computerscore}`);
    console.log(`human:${humanscore}`);

}

function playgame(){
    for(let i=0;i<5;i++){
        let humanchoice=getHumanChoice();
        let computerchoice=getComputerChoice();
        playround(humanchoice,computerchoice,i+1);
    }
    if(humanscore>computerscore){
        console.log("HUMAN won!");
    }
    else if(computerscore>humanscore){
        console.log("Computer won");
    }

    else{
        console.log("TIE!");
    }

}
playgame();

