function computerPlay() {
    //generate a random number from 1-100
    let randomNum = Math.floor(Math.random() * 100 + 1);
    // create control flow that sets computer choice based on number from 1-33, 34-66, 66-100
    // with 1-33 rock, 34-66 paper, 67 -100 scissor
    // return rock, paper, or scissor
    if (randomNum <= 33) {
      return "rock";
    } else if (randomNum >= 34 && randomNum <= 66) {
      return "paper";
    } else {
      return "scissor";
    }
  }
  
  function playerPlay() {
  
    let response = prompt("please type rock, paper, or scissor!");
    return response.toLowerCase();
  }
  
  function singleRound(playerSelection, computerSelection) {
  
    let result = checkWinner(playerSelection, computerSelection);
  
    if (result === "tie") {
      return `Tie! ${playerSelection} ties ${computerSelection}.`;
    }
  
    let msg = result
      ? `You win! ${playerSelection} beats ${computerSelection}.`
      : `You lose! ${computerSelection} beats ${playerSelection}.`;
  
    return msg;
  }
  
  function checkWinner(playerpick, computerpick) {
    if (playerpick === computerpick) {
      return "tie";
    }
  
    if (playerpick === "rock" && computerpick === "scissor") {
      return true;
    }
  
    if (playerpick === "rock" && computerpick === "paper") {
      return false;
    }
  
    if (playerpick === "paper" && computerpick === "scissor") {
      return false;
    }
  
    if (playerpick === "paper" && computerpick === "rock") {
      return true;
    }
  
    if (playerpick === "scissor" && computerpick === "rock") {
      return false;
    }
  
    if (playerpick === "scissor" && computerpick === "paper") {
      return true;
    }
  }
  
  function game() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    console.log(singleRound(playerSelection, computerSelection));
  }
  
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  
  async function runGame() {
    for (var i = 0; i < 5; i++) {
      game();
      await timer(1500); 
    }
  }
  
  runGame();