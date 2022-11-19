let suyog = {
    firstName: 'Suyog',
    lastName: 'Rahane',
    age: 22,
    rolNumber: 45,
    display: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}
console.log(suyog)  // o/p--> Suyog Rahane
// o/p-->
// {
//     firstName: 'suyog',
//     lastName: 'Rahane',
//     age: 22,
//     rolNumber: 45,
//     display: [Function: display]
//   }

suyog.display()  // o/p--> Suyog Rahane

console.log("*********************************************************")

let sagar = {
    firstName: 'Sagar',
    lastName: 'Kharde',
    age: 23,
    rollNumber: 34,
    display: function () {
        console.log(this.firstName, this.lastName)
    }
}
console.log(sagar)
// o/p-->
// {
//     firstName: 'Sagar',
//     lastName: 'Kharde',
//     age: 23,
//     rollNumber: 34,
//     display: [Function: display]
//   }

sagar.display()   // o/p--> Sagar Kharde

console.log("*********************************************************")


// function constructor

function Player(fn, ln, ag, rNo) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNumber = rNo
    // this.display = function () {
    //     console.log(this.firstName, this.lastName)
    // }
}

let suyog1 = new Player('Suyog', 'Rahane', 22, 45)
console.log(suyog1)
//o/p-->
// Player {
//     firstName: 'Suyog',
//     lastName: 'Rahane',
//     age: 22,
//     rollNumber: 45,
//     display: [Function (anonymous)]
//   }

//suyog1.display()  // o/p--> Suyog Rahane

console.log("********************************************")

let sagar1 = new Player('Sagar', 'Kharde', 23, 34)
console.log(sagar1)
// o/p-->
// Player {
//     firstName: 'Sagar',
//     lastName: 'Kharde',
//     age: 23,
//     rollNumber: 34,
//     display: [Function (anonymous)]
//   }

//sagar1.display() // o/p--> Sagar Kharde

console.log("*********************************************")

// Every Object.__proto__ == Parent.Protype
console.log(suyog1.__proto__ === Player.prototype)  // true
console.log(sagar1.__proto__ === Player.prototype)  // true

Player.prototype.display = function () {
    console.log(this.firstName + " " + this.lastName)
}
suyog1.display() // Suyog Rahane
sagar1.display() // Sagar Kharde

Player.prototype.city = 'Sangamner'
// o/p--> 
// Player {firstName: 'Sagar', lastName: 'Kharde', age: 23, rollNumber: 34}
// age: 23
// firstName: "Sagar"
// lastName: "Kharde"
// rollNumber:34
// [[Prototype]]:Object
// city:"Sangamner"

console.log(suyog1.city)  // Sangamner
console.log(sagar1.city)  // Sangamner


console.log(suyog1.hasOwnProperty("city"))  // false --> it is inherited by using prototype 
console.log(suyog1.hasOwnProperty("firstName")) // true
console.log(suyog1.hasOwnProperty("lastName"))  // true
console.log(suyog1.hasOwnProperty("rollNumber"))  // true
console.log(suyog1.hasOwnProperty("age"))        // true

console.log("*****************************************************")

let student = ["suyog", "rahul", "shamrao", "satish"]
console.log(student)  // o/p-->  [ 'suyog', 'rahul', 'shamrao', 'satish' ]

console.log(student.length)  //  4
console.log(student.sort())  //  [ 'rahul', 'satish', 'shamrao', 'suyog' ]


let employee = new Array(6)
employee[0] = "ramesh"
employee[1] = "sharad"
employee[2] = "satish"
employee[3] = "lucky"
employee[4] = "sachin"
employee[5] = "raju"
console.log(employee)   // [ 'ramesh', 'sharad', 'satish', 'lucky', 'sachin', 'raju' ]

console.log(student instanceof Array) // true
console.log(employee instanceof Array)  // true

console.log(employee.__proto__ == Array.prototype) // true
console.log(student.__proto__ == Array.prototype)  //true

// inbuilt
// Array.prototype.Suyog = function(){
//     console.log('hello')
// }console.log(employee.Suyog) //o/p--> hello


console.log(student.hasOwnProperty('length'))  // true

// (4) ['rahul', 'satish', 'shamrao', 'suyog']
// 0:"rahul"
// 1:"satish"
// 2:"shamrao"
// 3:"suyog"
// length:4



