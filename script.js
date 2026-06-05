
const getComputerChoice=function(){
    let n=Math.random();
    if(n<1/3)return "ROCK";
    else if(n>=1/3 && n<2/3)return "PAPER";
    else{
        return "SCISSOR";
    }
}

const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissor=document.querySelector(".scissor");

let humanchoice;

rock.addEventListener("click",()=>{
    playgame("ROCK");
});

paper.addEventListener("click",()=>{
    playgame("PAPER");
});

scissor.addEventListener("click",()=>{
    playgame("SCISSOR");
});


let humanscore=0;
let computerscore=0;

function playround(humanchoice,computerchoice){
    if(humanchoice===computerchoice){
        alert("TIE!");
        return;
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

}


function playgame(humanchoice){
    playround(humanchoice,getComputerChoice());

    const human=document.querySelector(".human_score");
    human.innerText=`Human: ${humanscore}`;
    const comp=document.querySelector(".computer_score");
    comp.innerText=`Computer: ${computerscore}`;

    if(humanscore===5){
        alert("Human win close to play again");
        humanscore=0;
        computerscore=0;
        human.innerText=`Human: ${humanscore}`;
        comp.innerText=`Computer: ${computerscore}`;
        return;

    }
    if( computerscore===5){
        alert("Computer win close to play again");
        humanscore=0;
        computerscore=0;
        human.innerText=`Human: ${humanscore}`;
        comp.innerText=`Computer: ${computerscore}`;
        return;
    }
    if(computerscore==5 && humanscore==5){
        alert("Tie close to play again");
        humanscore=0;
        computerscore=0;
        human.innerText=`Human: ${humanscore}`;
        comp.innerText=`Computer: ${computerscore}`;
        return;
    }
    

}

