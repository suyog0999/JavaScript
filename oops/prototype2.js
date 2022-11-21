class Players {
    firstName = 'Suyog'
    lastName = 'Rahane'
    age = 22
    rollNo = 45
}

let suyog = new Players()
console.log(suyog)

// o/p--> Players { firstName: 'Suyog', lastName: 'Rahane', age: 22, rollNo: 45 }

let sagar = new Players()
console.log(sagar)  // o/p--> Players { firstName: 'Suyog', lastName: 'Rahane', age: 22, rollNo: 45 }  

sagar.firstName = 'Sagar'
sagar.lastName = 'Kharde'
sagar.age = 23
sagar.rollNo = 44

console.log(sagar)

//o/p--> Players { firstName: 'Sagar', lastName: 'Kharde', age: 23, rollNo: 44 }

console.log("***********************************************************************************************")

// Es6 class
// updating the object properties at object creation only

class Employees {
    constructor(fn, ln, ag, rNo) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rNo
        this.display = function () {
            console.log(this.firstName, this.lastName)
        }
    }
}

let kanchan = new Employees('Kanchan', 'Rane', 23, 33)
console.log(kanchan)

// o/p--> Employees {
//   firstName: 'Kanchan',
//   lastName: 'Rane',
//   age: 23,
//   rollNo: 33,
//   display: [Function (anonymous)]
// }
// method gets attached to every object

kanchan.display() //o/p--> Kanchan Rane

// to hide display function or method

class Employees1 {
    constructor(fn, ln, ag, rNo) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rNo
        
    } display() {
        console.log(this.firstName, this.lastName)
    }
}

let radhika=new Employees1('Radhika','Apate',30,34)
console.log(radhika)
// o/p-->
// Employees1 {
//     firstName: 'Radhika',
//     lastName: 'Apate',
//     age: 30,
//     rollNo: 34
//   }

radhika.display()  //o/p-->  Radhika Apate


console.log("***********************************************************************************************")

// Object.create

let a={}

let anil=Object.create(a)
console.log(anil)  // o/p--> {} blank object

anil.firstName='Anil'
anil.lastName='Sharma'
anil.age=33
anil.rollNo=22
console.log(anil)

// o/p--> { firstName: 'Anil', lastName: 'Sharma', age: 33, rollNo: 22 }

let Employees2={
    init:function(fn,ln,ag,rNo){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.rollNo=rNo
        this.display=function()
        {
            console.log(this.firstName,this.lastName)
        }
    }
}

let mahesh=Object.create(Employees2)
console.log(mahesh) //o/p--> {}


mahesh.init('Mahesh','Aher',23,34)
console.log(mahesh)
// o/p-->
// {
//     firstName: 'Mahesh',
//     lastName: 'Aher',
//     age: 23,
//     rollNo: 34,
//     display: [Function (anonymous)]
//   }

mahesh.display()  // o/p--> Mahesh Aher

let Employees3={
    init:function(fn,ln,ag,rNo){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.rollNo=rNo
    },
    display(){
        console.log(this.firstName,this.lastName)
    }
}

let surekha=Object.create(Employees3)
surekha.init('Surekha','Salunke',22,33)
console.log(surekha)

// o/p--> { firstName: 'Surekha', lastName: 'Salunke', age: 22, rollNo: 33 }


surekha.display()  // o/p--> Surekha Salunke