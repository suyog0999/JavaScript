//12.splice()
//syntax 
//splice(start index, deletecount, item1, item2, itemN)
//action--> remove element from an array if neccesary insert new element in thier place and returning the deleted element
//returns-->  An array containing the elements that were deleted.

// ex1

let num=[10,20,30,40,50]
console.log(num)
let a2=num.splice(1,1)
console.log(a2)       //o/p--> [20]
console.log(num)      //o/p--> [10,30,40,50]

// ex2
let num1=[10,20,30,40,50]
let a3=num1.splice(2,3)
console.log(a3)         //o/p--> [ 30, 40, 50 ]
console.log(num1)       //o/p--> [10,20]


//ex3
let num2=[10,20,30,40,50]
let a4=num2.splice(2,3,25)
console.log(a4)         //o/p--> [ 30, 40, 50 ]
console.log(num2)       //o/p--> [10,20,25]


//ex
let num3=[10,20,30,40,50]
let a5=num3.splice(2,3,25, 'stop')
console.log(a5)         //o/p--> [ 30, 40, 50 ]
console.log(num3)       //o/p--> [10,20,25, 'stop']