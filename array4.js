//20. slice
// action--> extract array
// return--> new array
// slice(startposition, endposition)--> endposition is optional
// slice method only accept input index in left to rigth format oterwise it return a blank array


//         -5       -4       -3       -2       -1
//          0        1        2        3        4
let name=['suyog','sanket','sagar','shubham','mahesh']
console.log(name.length)           //o/p-->  5

let a=name.slice(1)
console.log(a)                   //o/p-->  [ 'sanket', 'sagar', 'shubham', 'mahesh' ]

let a1=name.slice(2,4)
console.log(a1)                  //o/p-->  [ 'sagar', 'shubham' ]

let a2=name.slice(2)
console.log(a2)                  //o/p-->  [ 'sagar', 'shubham', 'mahesh' ]


let a3=name.slice(-5,-3)
console.log(a3)                  //o/p-->  [ 'suyog', 'sanket' ]


let a4=name.slice(-5,4)
console.log(a4)                  //o/p-->  [ 'suyog', 'sanket', 'sagar', 'shubham' ]


let a5=name.slice(4,0)
console.log(a5)                  //o/p-->  []--> slice method only accept input index in left to rigth format



console.log('**************************************************************************************************')


//21. fill()
// action--> exchange given index to particular input 
// return--> new array
//fill('input', startposition, endposition) endposition is optional


let num=[0,1,2,3,4,5,6,7,8,9]

let a6=num.fill('suyog', 2,6)
console.log(a6)               //o/p-->  [0,  1, 'suyog', 'suyog', 'suyog', 'suyog',  6,  7,  8,  9 ]

num=[0,1,2,3,4,5,6,7,8,9]
let a7=num.fill('true',7)
console.log(a7)                 //o/p-->  [0,      1,  2,  3,  4,  5,  6,'true', 'true', 'true' ]