//object literal
// obj={
//     firstname:"apj",
//     lastname:"kalam",
//     age:60
// }


// template =>use to object creation
//1. function constructor
//2. ES6 class
//3. object.create

//1. Function constructor


function Employee(fn, ln, ag, skill) 
{
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.skill = skill
}

let Employee1 = new Employee('Suyog', 'Rahane', 22, ['js', 'html'])
console.log(Employee1)

// o/p-->
// Employee {
//     firstName: 'Suyog',
//     lastName: 'Rahane',
//     age: 22,
//     skill: [ 'js', 'html' ]
//   }


let Employee2 = new Employee('Nisha', 'gupta', 24, ['SQL', 'Java'])
console.log(Employee2)

// o/p-->
// Employee {
//     firstName: 'Nisha',
//     lastName: 'gupta',
//     age: 24,
//     skill: [ 'SQL', 'Java' ]
//   }

console.log(Employee2.age)  // o/p-->24

Employee2.city = 'Sangamner'
console.log(Employee2)

// o/p-->
// Employee {
//     firstName: 'Nisha',
//     lastName: 'gupta',
//     age: 24,
//     skill: [ 'SQL', 'Java' ],
//     city: 'Sangamner'
//   }


Employee2.lastName = 'Ghule'
console.log(Employee2)

// o/p-->
// Employee {
//     firstName: 'Nisha',
//     lastName: 'Ghule',
//     age: 24,
//     skill: [ 'SQL', 'Java' ],
//     city: 'Sangamner'
//   }


delete Employee2.city 
console.log(Employee2)

// o/p-->
// Employee {
//     firstName: 'Nisha',
//     lastName: 'Ghule',
//     age: 24,
//     skill: [ 'SQL', 'Java' ],
//   }


// //2. ES6 class

class Student 
{
    constructor(fn, ln, ag, skill) 
   {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.skills = skill
    }
}
let Student1=new Student('Amol','Gode',30,['Django','Python'])
console.log(Student1)

// o/p-->
// Student {
//     firstName: 'Amol',
//     lastName: 'Gode',
//     age: 30,
//     skills: [ 'Django', 'Python' ]
//   }


// 3. Object creation


let obj = {
    init:function(fn,ln,ag, sk){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.skills = sk
    }
}

let person = Object.create(obj)
console.log(person)  //o/p-->{} --> blank object
person.init("ram","sharma",3,["python3","java","css"])
console.log(person)

// o/p-->
// {
//     firstName: 'ram',
//     lastName: 'sharma',
//     age: 3,
//     skills: [ 'python3', 'java', 'css' ]
//   }
