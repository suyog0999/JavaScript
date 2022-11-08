// conditional statement 
// if we give 1 input and we need multiple outputs the we can used conditional statement

// syntax 
// if(condition)
// {
//     statement
// }
// else{
//     statement
// }

//example 1:
// numT > 0 &&  numT <= 5 ====> 5 % discount
// numT > 5  && numT <=10 ====> 10 % discount
// numT > 10 =================> 20 % discount

// only using if 
// In this type  checked all condition and print only true condition

let numT = 10

if(numT > 0 && numT <= 5){
    console.log('5 % discount')
}
if(numT > 5 && numT <= 10){
    console.log('10 % discount')
}
if(numT > 10){
    console.log('10 % discount')
}

//o/p---> 10 % discount


// using if else
// In this type checked one by one condition if one's are false then it return second else if second are also false it return third condtion

let num = 20
if(num > 0 && num <= 5){
    console.log('5 % discount')
}
else if(num > 5 && num <= 10){
    console.log('10 % discount')
}
else if(num > 10){
    console.log('20 % discount')
}

//o/p---> 20 % discount



console.log('***********************************************')



// example 2

let marks  = 96

if(marks > 90){
    console.log('Grade A')
}
if(marks > 75){
    console.log('Grade B')
}
if(marks > 65){
    console.log('Grade C')
}

//o/p--> Grade A
//       Grade B
//       Grade C


if(marks >90){
    console.log('Grade A')
}
else if(marks > 75){
    console.log('Grade B')
}
else if(marks > 65){
    console.log('Grade C')
}
else
{
    console.log('grade D')
}

//o/p--->  Grade A



console.log('***************************************')





// Ternary operator
//example 1

let a = 10 
let b = 20
 
// //1. using if else statement 

if(a > b){
    console.log('A is greater')
}
else {
    console.log('B is greater')
}

// //o/p---> B is greater



//2. using Tenary operator

a > b ? console.log('A is greater') : console.log('B is greater')

//o/p---> B is greater


console.log('*****************************************************')


let age = 20
let ab = age>= 18 ? "can Voting":"cannot Voting"
console.log(ab)

//o/p---> can Voting


  
let crop="Sugarcane"
let z=  (crop = "Sugarcane") ? "can Testy":" cannot Testy"
console.log(z)

//o/p---> can Testy