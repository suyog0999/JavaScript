// OOPS

//oops is more proper and secure way to create object

//object creation by object literal

let suyog = {
    firstName: 'Suyog',
    lastName: 'Rahane',
    age: 22,
    rollNumber: 45,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
console.log(suyog)
// o/p--> 
// {
//     firstName: 'Suyog',
//     lastName: 'Rahane',
//     age: 22,
//     rollNumber: 45,
//     display: [Function: display]
//   }


suyog.display()  // o/p--> SuyogRahane

// object creation by object template
// 1. function constructor
// 2. ES6 class
// 3. object.create

// 1. function constructor

function Employee(fn, ln, ag, rNo) {
    this.firstName = fn,
        this.lastName = ln,
        this.age = ag,
        this.rollNumber = rNo
        // this.display = function () {
        //     console.log(`${this.rollNumber} ${this.age}`)
        // }
}

let Ram = new Employee('Ram', 'Sharma', 23, 40)
console.log(Ram)
// o/p-->
// Person {
//     firstName: 'Ram',
//     lastName: 'Sharma',
//     age: 23,
//     rollNumber: 40,
//     display: [Function (anonymous)]
//   }

//Ram.display()  // o/p--> 40 23

let Rahul = new Employee('Rahul', 'Sarode', 33, 43)
console.log(Rahul)

let Revati = new Employee('Revati', 'Satpute', 22, 44)
console.log(Revati)


// prototype  

Employee.prototype.display=function(){
    console.log(this.firstName+' '+this.lastName)
}

Revati.display() // o/p--> Revati Satpute
Rahul.display()  // o/p--> Rahul Sarode
Ram.display()    // o/p--> Ram Sharma 

console.log(Ram instanceof Employee)  // o/p--> true  // here Ram Rahul Revati is instanceof Employee

// here Ram Rahul Revati is instanceof Employee

console.log(Ram.__proto__ == Employee.prototype)  // o/p--> true