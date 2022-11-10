let playerChoice = 0;
let computerChoice = 0;

function getComputerChoice(){
    const choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)]
}



function singleRound(playerSelection,computerSelection){
   
  if((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')){
    playerChoice+=1
    return console.log('Player 1 wins' + playerChoice)
  } 
  else if(playerSelection === computerSelection){
    return console.log('A tie mate')
  }
  else {
    computerChoice+=1
    return console.log('Computer Wins' + computerChoice)
  }

}

function game(){

    
    for(let i = 1; i <=5; i++){
    const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase()
  /*   if((playerSelection === 'rock')||(playerSelection === 'paper')||(playerSelection==='scissors')){
    } else if(playerSelection === choice){
        return
    }
    else {
        computerChoice +=1
        console.log(computerChoice)

    } */
    singleRound(playerSelection,getComputerChoice())
    if( i===5){
        if(playerChoice > computerChoice){
           // console.log(`Player 1 wins with${playerChoice} points`)
            window.alert(`Player 1 wins with ${playerChoice} points`)
            return
        }else{
            //console.log(`Computer wins with${computerChoice} points`)
            window.alert(`Player 1 wins with ${playerChoice} points`)
            return
        }
    }

    
    }

}

game();

/* const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase()
const x = getComputerChoice();
console.log(x)
singleRound(playerSelection,x) */