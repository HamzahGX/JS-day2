let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  
  const playerChoice = prompt("Enter Rock, Paper, or Scissors:");
  const lowerPlayerChoice = playerChoice.toLowerCase();
  
  if (lowerPlayerChoice === computerChoice.toLowerCase()) {
    console.log("It's a tie!");
  } else if (
    (lowerPlayerChoice === 'rock' && computerChoice === 'Scissors') ||
    (lowerPlayerChoice === 'paper' && computerChoice === 'Rock') ||
    (lowerPlayerChoice === 'scissors' && computerChoice === 'Paper')
  ) {
    console.log(`You Win! ${lowerPlayerChoice} beats ${computerChoice}.`);
    playerScore++;
  } else {
    console.log(`You Lose! ${computerChoice} beats ${lowerPlayerChoice}.`);
    computerScore++;
  }
}

if (playerScore > computerScore) {
  console.log("You Win the Game!");
} else if (playerScore < computerScore) {
  console.log("You Lose the Game!");
} else {
  console.log("It's a Tie!");
}
