// array-> array is collection of an element
//in javascript all things are object
//thus array is also object
// array have property and methods


//property
//length
  
 //                0      1       2        3       4        5      6
let student=[ 'suyog','sagar','ajit','mahesh','sanket','amol', 'rohit' ]
console.log(student.length)          //o/p->   7

console.log(student[2])              //o/p->   ajit
console.log(student[4])              //o/p->   sanket


let marks=[80,90,95,98,88,99]
console.log(marks.length)              //o/p->   6

console.log(marks[3])                 //o/p->  98

// update()
let games=['kabbaddi','cricket','badminton','volleyball']
console.log(games)            // o/p--> [ 'kabbaddi', 'cricket', 'badminton', 'volleyball' ]
console.log(games[1])         // o/p--> cricket
games[1]='kho-kho'
console.log(games)            // o/p--> [ 'kabbaddi', 'kho-kho', 'badminton', 'volleyball' ]

// methods (action & return)

let fruits=['apple','banana','papaya','jamun']


//1.push()
console.log(fruits.length)         //o/p->   4
let a1=fruits.push('grapes')       
console.log(a1)                    //o/p->   5
console.log(fruits)                //o/p->   [ 'apple', 'banana', 'papaya', 'jamun','grapes ]


//2.pop()
console.log(fruits.length)         //o/p->   5
let a2=fruits.pop()       
console.log(a2)                    //o/p->   grapes
console.log(fruits)                //o/p->   ['apple', 'banana', 'papaya', 'jamun' ]



//3.unshift()
console.log(fruits.length)         //o/p->   4
let a3=fruits.unshift('mango')       
console.log(a3)                    //o/p->   5
console.log(fruits)                //o/p->   [ 'mango', 'apple', 'banana', 'papaya', 'jamun' ]


//4.shift()
console.log(fruits.length)         //o/p->   5
let a4=fruits.shift()       
console.log(a4)                    //o/p->   mango
console.log(fruits)                //o/p->   ['apple', 'banana', 'papaya', 'jamun' ]

