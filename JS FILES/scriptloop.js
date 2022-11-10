// guess the number using for loop ( 5 times or any particular times we can guess the number using for loop)

// let randomNumber=Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// for (i=0;i<5;i++)
// {
//     let userInput=prompt("enter any number between 1 to 6")
//     if(randomNumber==userInput)
//     {
//         console.log('GUESS IS CORRECT')
//         break
//     }
//     else
//     {
//         console.log('GUESS IS INCORRECT,  Please try again....')
//     }
// }
   


// guess the number using while loop ( we can guess the number until guess is correct)

let randomNumber=Math.floor(Math.random()*6)+1
console.log(randomNumber)
let userInput
while(randomNumber != userInput)
{
    userInput = prompt("Enter any number between 1 to 6") 
    if(randomNumber == userInput)
    {
        console.log('GUESS IS CORRECT')
    }
    else
    {
        console.log('GUESS IS NOT CORRECT,  Please try again....')
    }
}