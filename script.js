function getComputerChoice(){
let ch=Math.random();
let str="";
if(ch<=0.33){
str="Rock";
}
else if(ch<=0.67){
str="Papper";
}else{
    str="Scissors";
}
return str;
}
console.log(getComputerChoice())
function getHumainChoice(){
    let cho =  prompt("enter your choice:");
    return cho;
}
console.log(getHumainChoice());
let humainScore = 0;
let computerScore = 0;
