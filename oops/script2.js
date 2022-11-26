//  ES6 class

class Employee {
    firstName = "Jalinder"
    lastName = "Pawar"
    rollNumber = 22
    skill = ["java", "php"]
}
let jalinder = new Employee()
console.log(jalinder)
// o/p--> 
// Employee {
//     firstName: 'Jalinder',
//     lastName: 'Pawar',
//     rollNumber: 22,
//     skill: [ 'java', 'php' ]
//   }


let sagar = new Employee()
console.log(sagar)
// o/p-->
// Employee {
//     firstName: 'Jalinder',
//     lastName: 'Pawar',
//     rollNumber: 22,
//     skill: [ 'java', 'php' ]
//   }

//  Update the value


sagar['firstName'] = "Sagar"
sagar['lastName'] = "Rahane"
sagar['rollNumber'] = 33
sagar['skill'] = ['selenium', 'cypress']
console.log(sagar)

// o/p--> 
// Employee {
//     firstName: 'Sagar',
//     lastName: 'Rahane',
//     rollNumber: 33,
//     skill: [ 'selenium', 'cypress' ]
//   }

console.log('*******************************************************************************')

class Employee1 {
    constructor(fn, ln, rNo, sks) {
        this.firstName = fn
        this.lastName = ln
        this.rollNo = rNo
        this.skills = sks
    }
}

let suyog = new Employee1("Suyog", "Rahane", 45, ["js", "java"])
console.log(suyog)

// o/p--> 
// Employee1 {
//     firstName: 'Suyog',
//     lastName: 'Rahane',
//     rollNo: 45,
//     skills: [ 'js', 'java' ]
//   }


// at a time we create multiple objects by using array
let Employees = [
    new Employee1("ramesh", "raut", 32, ['javascript', 'SQL']),
    new Employee1("onkar", "bhat", 54, ['django', 'react']),
    new Employee1('rajeshwari', 'salunke', 43, ["java", "cypress"]),
    new Employee1("vaibhav", "sharma", 11, ["jmeter", "C++"])
]

// o/p-->
// [
//     Employee1 {
//       firstName: 'ramesh',
//       lastName: 'raut',
//       rollNo: 32,
//       skills: [ 'javascript', 'SQL' ]
//     },
//     Employee1 {
//       firstName: 'onkar',
//       lastName: 'bhat',
//       rollNo: 54,
//       skills: [ 'django', 'react' ]
//     },
//     Employee1 {
//       firstName: 'rajeshwari',
//       lastName: 'salunke',
//       rollNo: 43,
//       skills: [ 'java', 'cypress' ]
//     },
//     Employee1 {
//       firstName: 'vaibhav',
//       lastName: 'sharma',
//       rollNo: 11,
//       skills: [ 'jmeter', 'C++' ]
//     }
//   ]

console.log(Employees)

console.log("**************************************************************")




//  to find all object in array using for loop and forEach method
// for (let i = 0; i < Employees.length; i++) 
// {
//     console.log(Employees[i])
// }

Employees.forEach(function (el) {
    console.log(el) 
    //or
    // for (let key in el) {
    //     console.log(key, el[key])
    // }
})

console.log("************************************************")

// object retrive by using for loop
let samir = {
    firstname: "samir",
    lastName: "sarode"
}
console.log(samir.firstname) // o/p--> samir-->value


for(let a in samir)
{
    console.log(a) 
}
// o/p--> all  keys like firstname and lastname


for(let a1 in samir)
{
    console.log(samir[a1]) 
 }
// o/p--> all values like samir and sarode

for(let a2 in samir){
    console.log(a2,samir[a2])
}
// o/p--> all keys and thier value like firstname samir and lastname sarode

console.log("*********************************************************************")

//to set/add value using set function and getting the value using get function

class Employee2 {
    setFirstName(FN) {
        this.firstName = FN
    }
    setLastName(LN) {
        this.lastName = LN
    }
    setRollNo(RN) {
        this.rollNo = RN
    }
    setSkills(array) {
        this.skills = array
    }
    getFirstName() {
        console.log(this.firstName)
    }
    getLastName() {
        console.log(this.lastName)
    }
    getRollNo() {
        console.log(this.rollNo)
    }
    getSkills() {
        console.log(this.skills)
    }
}

let Saurabh = new Employee2()
console.log(Saurabh)
// o/p-->{} empty object

Saurabh.setFirstName('Saurabh')
Saurabh.setLastName('patil')
Saurabh.setRollNo(23)
Saurabh.setSkills(['java','php'])
console.log(Saurabh)

// o/p-->
// Employee2 {
//     firstName: 'Saurabh',
//     lastName: 'patil',
//     rollNo: 23,
//     skills: ['java','php']
//   }


Saurabh.getFirstName() // Saurabh
Saurabh.getLastName()  // patil
Saurabh.getRollNo()    // 23
Saurabh.getSkills()    //  ['java','php' ]