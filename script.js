// To get user input we can used prompt() method
// prompt() method  is  window||browser method

// program 1 
// Guess only using floor() method

let randomNumber = Math.floor(Math.random()*6) + 1
console.log(randomNumber)  
let userInput = prompt('Enter any number between 1 to 6')  
if(userInput == randomNumber){
    console.log('Guess is correct')
}
else {
    console.log('Guess is incorrect')
}

console.log('**************************************************')

// method using ceil() method

// let randomNumber = Math.ceil(Math.random()*6) 
// console.log(randomNumber)  
// let userInput = prompt('Enter any number between 1 to 6')  
// if(userInput == randomNumber){
//     console.log('Guess is correct')
// }
// else {
//     console.log('Guess is incorrect')
// }