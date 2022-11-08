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
    skills: ["Java", "Cypress", "Manual","Angular"]
}, {
    firstName: "Samir",
    lastName: "Choughule",
    age: 40,
    city: "Pune",
    skills: ["Java", "python", 'React','cpp']
}]


// program 11
// Except first and last element from skill array make all other element replace with 'default'
// ex skill:['cpp','default','default','java']

employee.forEach(el=>
{
    el.skills.fill('default', 1, el.skills.length-1)
})
console.log(employee)

// o/p-->
// [
//     {
//       firstName: 'Suyog',
//       lastName: 'Rahane',
//       age: 22,
//       city: 'Sangamner',
//       skills: [ 'Javascript', 'default', 'c' ]
//     },
//     {
//       firstName: 'Amol',
//       lastName: 'Vetal',
//       age: 23,
//       city: 'Talegoan',
//       skills: [ 'SQL', 'default', 'MangoDB' ]
//     },
//     {
//       firstName: 'Mansi',
//       lastName: 'Khatode',
//       age: 32,
//       skills: [ 'Java', 'default', 'Manual' ]
//     },
//     {
//       firstName: 'Samir',
//       lastName: 'Choughule',
//       age: 40,
//       city: 'Pune',
//       skills: [ 'Java', 'default', 'React' ]
//     }
//   ]
//   PS C:\Users\technOrbit\Desktop\JavaScript> node objectarray2.js
//   [
//     {
//       firstName: 'Suyog',
//       lastName: 'Rahane',
//       age: 22,
//       city: 'Sangamner',
//       skills: [ 'Javascript', 'default', 'c' ]
//     },
//     {
//       firstName: 'Amol',
//       lastName: 'Vetal',
//       age: 23,
//       city: 'Talegoan',
//       skills: [ 'SQL', 'default', 'MangoDB' ]
//     },
//     {
//       firstName: 'Mansi',
//       lastName: 'Khatode',
//       age: 32,
//       city: 'Sangamner',
//       skills: [ 'Java', 'default', 'default', 'Angular' ]
//     },
//     {
//       firstName: 'Samir',
//       lastName: 'Choughule',
//       age: 40,
//       city: 'Pune',
//       skills: [ 'Java', 'default', 'default', 'cpp' ]
//     }
//   ]


// program 12
// replace 2nd and 3rd place element of skills by Html and Css 

employee.forEach(el=>
{
    el.skills.splice(1,2,'Html','Css')
})
console.log(employee)

// o/p-->
// [
//     {
//       firstName: 'Suyog',
//       lastName: 'Rahane',
//       age: 22,
//       city: 'Sangamner',
//       skills: [ 'Javascript', 'Html', 'Css' ]
//     },
//     {
//       firstName: 'Amol',
//       lastName: 'Vetal',
//       age: 23,
//       city: 'Talegoan',
//       skills: [ 'SQL', 'Html', 'Css' ]
//     },
//     {
//       firstName: 'Mansi',
//       lastName: 'Khatode',
//       age: 32,
//       city: 'Sangamner',
//       skills: [ 'Java', 'Html', 'Css', 'Angular' ]
//     },
//     {
//       firstName: 'Samir',
//       lastName: 'Choughule',
//       age: 40,
//       city: 'Pune',
//       skills: [ 'Java', 'Html', 'Css', 'cpp' ]
//     }
//   ]

// program 13
// add userName key in each object of array and the userName key value contain firstName first character and lastName first character 
// ex--> firstName:'Suyog'
//       lastName:'Rahane'
//  then userName:SR

employee.forEach(el=>
{
    el.userName= el.firstName.split('')[0]+el.lastName.split('')[0]
    //or
    // el.userName=el.firstName[0]+el.lastName[0]
})
console.log(employee)

// o/p-->
// [
//     {
//       firstName: 'Suyog',
//       lastName: 'Rahane',
//       age: 22,
//       city: 'Sangamner',
//       skills: [ 'Javascript', 'Html', 'Css' ],
//       userName: 'SR'
//     },
//     {
//       firstName: 'Amol',
//       lastName: 'Vetal',
//       age: 23,
//       city: 'Talegoan',
//       skills: [ 'SQL', 'Html', 'Css' ],
//       userName: 'AV'
//     },
//     {
//       firstName: 'Mansi',
//       lastName: 'Khatode',
//       age: 32,
//       city: 'Sangamner',
//       skills: [ 'Java', 'Html', 'Css', 'Angular' ],
//       userName: 'MK'
//     },
//     {
//       firstName: 'Samir',
//       lastName: 'Choughule',
//       age: 40,
//       city: 'Pune',
//       skills: [ 'Java', 'Html', 'Css', 'cpp' ],
//       userName: 'SC'
//     }
//   ]


// program 14
// print array like userNames=['SR','AV','MK','SC']

// using forEach()
let array=[]
employee.forEach(el=>
{
   array.push(el.firstName[0]+el.lastName[0])
})
console.log(array)

// o/p--> [ 'SR', 'AV', 'MK', 'SC' ]



// using map()
let userNamearr=employee.map(el=>(el.firstName[0]+el.lastName[0]))
console.log(userNamearr)

// o/p-->  [ 'SR', 'AV', 'MK', 'SC' ]