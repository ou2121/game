

function getComputerChoice(){
let number=Math.random();
 let computerchoice="";
if(number<=0.33){computerchoice="rock";}
else if(number<=0.67){computerchoice="paper";}
else{    computerchoice="scissors";}
return computerchoice;}

function getHumainChoice(){
    let humainchoice ;
    return humainchoice;}
let humainScore = 0;
let computerScore = 0;


function playRound(humainchoice,computerchoice){
  
    if(humainchoice === computerchoice){
       
      return "it's a tie";

    }
    if(((humainchoice === "paper" && computerchoice === "rock") ||
    (humainchoice === "scissors" && computerchoice === "paper") ||
    (humainchoice === "rock" && computerchoice === "scissors"))){
        humainScore++;
        return "you win this round!";
        
}else {
    computerScore++;
 return  "computer win this round";
    
}}


const computerselection = getComputerChoice();


const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

 const rsl= document.getElementById("result");
rock.addEventListener("click",function(event){
    
    
const computerselection = getComputerChoice();
    
   
    rsl.innerText=`${ playRound("rock",computerselection) }`
console.log(computerselection)
    
    });
paper.addEventListener("click",function(event){
    
  
const computerselection = getComputerChoice();
   
   
    rsl.innerText=`${   playRound("paper",computerselection) }`
    console.log(computerselection)
    
    });
scissors.addEventListener("click",function(event)
{   
   const computerselection = getComputerChoice();
  rsl.innerText=`${ playRound("scissors",computerselection)}`
  console.log(computerselection)
 })

   
   
    
    
    

   