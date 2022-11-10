let playerChoice = 0;
let computerChoice = 0;
let ps;
let cc;
const buttons = document.querySelectorAll('button');

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}




function getComputerChoice(){
    const choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)]
}



function singleRound(playerSelection,computerSelection){
    let container = ""
   
  if((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')){
    playerChoice+=1
    //return console.log('Player 1 wins' + playerChoice)
    container = `Player 1 wins with ${ps}` +'<br><br>'+ 'Player 1:'+ playerChoice +'<br>'+'Computer: ' + computerChoice
    if(playerChoice ===5){
        container = 'Player 1 wins the Game!,Refresh page to play again ' +'<br><br>'+ 'Player 1:'+ playerChoice +'<br>'+'Computer: ' + computerChoice

        disableButtons()
    }
  } 
  else if(playerSelection === computerSelection){
   // return console.log('A tie mate')
   container = `This is a tie,both players selected ${computerSelection}`
  }
  else {
    computerChoice+=1
    //return console.log('Computer Wins' + computerChoice)
    container = `Computer Wins with ${cc}`  +'<br><br>'+ 'Player 1:'+ playerChoice +'<br>'+'Computer: ' + computerChoice
    if(computerChoice ===5){
        container = 'Computer wins the Game with,Refresh page to play again' + '<br><br>'+ 'Player 1:'+ playerChoice +'<br>'+'Computer: ' + computerChoice
disableButtons()    }
  }

  document.getElementById('container').innerHTML = container

}

/* function game(){

    
    for(let i = 1; i <=5; i++){
    const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase()
    singleRound(playerSelection,getComputerChoice())
    if( i===5){
        if(playerChoice > computerChoice){   
            window.alert(`Player 1 wins with ${playerChoice} points`)
            return
        }else{
            window.alert(`Player 1 wins with ${playerChoice} points`)
            return
        }
    }

    
    }

} */









buttons.forEach((button) => { 
  button.addEventListener('click', () => {
   ps = button.id;
   cc = getComputerChoice()
   console.log(cc)
   singleRound(ps,cc)
  });
});

