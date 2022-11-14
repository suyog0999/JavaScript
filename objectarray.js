let employee = [{
    firstName: "Suyog",
    lastName: "Rahane",
    age: 22,
    city: "Sangamner",
    skills: ["Javascript", "Java", "c"]
}, {
    firstName: "Amol",
    lastName: "Vetal",
    age: 23,
    city: "Talegoan",
    skills: ["SQL", "Selenium", "MangoDB"]
}, {
    firstName: "Mansi",
    lastName: "Khatode",
    age: 32,
    city: "Sangamner",
    skills: ["Java", "Cypress", "Manual"]
}, {
    firstName: "Samir",
    lastName: "Choughule",
    age: 40,
    city: "Pune",
    skills: ["Java", "python", 'React']
}]



//How many element present in employee


console.log(employee.length)   //o/p-->  4


console.log(employee[3])       

//o/p-->
// {
//     firstName: "Samir",
//     lastName: "Choughule",
//     age: 40,
//     city: "Pune",
//     skills: ["Java", "python", 'React']
// }


//Change lastname from Chaughule to jadhav


console.log(employee[3].lastName="Jadhav")
console.log(employee[3])

//o/p-->
// {
//     firstName: 'Samir',
//     lastName: 'Jadhav',
//     age: 40,
//     city: 'Pune',
//     skills: [ 'Java', 'python', 'React' ]
//   }

//Progarm 1
//Retrive the fullName of all employee

//Using For loop
for (let i = 0; i < employee.length; i++) {
    //console.log(i)                               //o/p--> return index ie: 4

    //console.log(employee[i])                     //o/p--> return particular element presnt in particular array

    console.log(`${employee[i]['firstName']} ${employee[i].lastName}`)   //interpolation is concat particular string return with  space bet that two particular string
       
}//OR
    //console.log(employee[i].firstName , employee[i].lastName        //, is concat particular string return with  space bet that two particular string
    //console.log(employee[i].firstName + ' ' + employee[i].lastName) // ' 'concat particular string return with  space bet that two particular string
    //console.log(employee[i].firstName + employee[i].lastName)       //concat particular string return without any space bet that two particular string
    
//o/p-->
// Suyog Rahane
// Amol Vetal
// Mansi Khatode
// Samir Jadhav

//Using forEach()

employee.forEach(function (el) 
{
    //console.log(el)        //o/p--> it gives all element present in particular array
    console.log(el.firstName, el["lastName"])
})
//o/p-->
// Suyog Rahane
// Amol Vetal
// Mansi Khatode
// Samir Jadhav


//Program 2
//Find the full Name of student whoes age is greter that 25
// Using forEach()

employee.forEach(function (el) {
    if (el.age > 25) {
        console.log(el['firstName'] + " " + el['lastName'])
    }
})
//o/p-->
// Mansi Khatode
// Samir Jadhav

// by using filter method

let above25 = employee.filter(function (el) {
    return el.age > 25
})
console.log(above25) //o/p-->[
//     {
//       firstName: 'Mansi',
//       lastName: 'Khatode',
//       age: 32,
//       city: 'Sangamner',
//       skills: [ 'Java', 'Cypress', 'Manual' ]
//     },
//     {
//       firstName: 'Samir',
//       lastName: 'Jadhav',
//       age: 40,
//       city: 'Pune',
//       skills: [ 'Java', 'python', 'React' ]
//     }
//   ]

above25.forEach(function (el) {
    console.log(el.firstName + el.lastName)
})
//o/p-->
// MansiKhatode
// SamirJadhav


//Program 3
//find the average of all student age

let sum = employee.reduce(function (acc, el) {
    //console.log(el) //object
    return acc + el.age
}, 0)
console.log(sum)    //o/p-->sum of the age 117

//Avg => sum/number of element
let AvgOfage = sum / employee.length
console.log(AvgOfage)
//o/p-->   avg of the age 29.25