let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function will be called at the start of each new round in order to generate the new secret target number between 0 and 10
const generateTarget = () => Math.floor(Math.random()*10)

//This function will be called each round to determine which guess is closest to the target number.
const compareGuesses = (humanNumber,computerNumber,targetNumber) =>{
   if(humanNumber >9) console.log('Alert! input is not between 0 and 10!')
   return Math.abs(computerNumber - targetNumber) <  Math.abs(humanNumber - targetNumber)  ?  0 : 1    
}
/// verify compareGuesses function//
console.log(compareGuesses(10,3,5)) // should output 1
console.log(compareGuesses(6,3,5)) // should output 1
console.log(compareGuesses(0,3,5)) // should output 0
//********************************** */

//This function will be used to correctly increase the winner’s score after each round.
const updateScore = (winner) =>{
   if (winner === 'human') humanScore +=1
   else if (winner === 'computer') computerScore +=1
   else console.log('check code. There is an error')
}


//This function will be used to update the round number after each round.
const advanceRound = () => currentRoundNumber +=1;