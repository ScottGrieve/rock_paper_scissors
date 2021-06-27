function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    }
    else if (randomNumber === 1) {
        return 'paper';
    } 
    else if (randomNumber === 2) {
        return 'scissors';
    }

}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Tie! You both chose rock.';
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats rock.';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats paper. ';
    }
    if (playerSelection == 'paper' && computerPlay() == 'paper') {
        return 'Tie! You both chose paper.';
    }
    else if (playerSelection == 'paper' && computerPlay() == 'rock') {
        return 'You win! Paper beats rock.';
    }
    else if (playerSelection == 'paper' && computerPlay() == 'scissors') {
        return 'You lose! Scissors beats paper.';
    }
    if (playerSelection == 'scissors' && computerPlay() == 'scissors') {
        return 'Tie! You both chose scissors.';
    }
    else if (playerSelection == 'scissors' && computerPlay() == 'rock') {
        return 'You lose! Rock beats scissors.';
    }
    else if (playerSelection == 'scissors' && computerPlay() == 'paper') {
        return 'You win! Scissors beats paper';
    }
}
function game() {
    
}
const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


