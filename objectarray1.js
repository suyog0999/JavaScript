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


//Program 4
//Find firstName of student whoes city is sangamner

employee.forEach(function(el)
{
    if(el.city=='Sangamner')
    {
        console.log(el.firstName)
    }
})

// o/p-->
// Suyog
// Mansi


console.log('********************************************************')




//Program5
//Add salesforce skill into each skill

employee.forEach(function(el)
{
    el.skills.push('salesforce')
})
console.log(employee)

// o/p-->
// [
//     {
//       firstName: 'Suyog',
//       lastName: 'Rahane',
//       age: 22,
//       city: 'Sangamner',
//       skills: [ 'Javascript', 'Java', 'c', 'salesforce' ]
//     },
//     {
//       firstName: 'Amol',
//       lastName: 'Vetal',
//       age: 23,
//       city: 'Talegoan',
//       skills: [ 'SQL', 'Selenium', 'MangoDB', 'salesforce' ]
//     },
//     {
//       firstName: 'Mansi',
//       lastName: 'Khatode',
//       age: 32,
//       city: 'Sangamner',
//       skills: [ 'Java', 'Cypress', 'Manual', 'salesforce' ]
//     },
//     {
//       firstName: 'Samir',
//       lastName: 'Choughule',
//       age: 40,
//       city: 'Pune',
//       skills: [ 'Java', 'python', 'React', 'salesforce' ]
//     }
//   ]


//Program 6
//write in format like  'firstname:no of skill'

employee.forEach(el => 
{
    console.log(el.firstName+':'+el.skills.length)
})

//o/p-->
// Suyog:4
// Amol:4
// Mansi:4
// Samir:4


console.log('********************************************************')




//Program 7
//write a firstName when city = Sangamner , Skills=Java
// using forEach()
employee.forEach(el=>
{
    if(el.city=="Sangamner" && el.skills.includes("Java"))
    {
            console.log(el.firstName)
    }
})

// o/p-->
// Suyog
// Mansi

//OR
// using Filter()

let a=employee.filter(el=>
{
    return el.city=="Sangamner" && el.skills.includes("Java")
})
console.log(a)

a.forEach(el=>
{
   console.log (el.firstName)
})

// o/p-->
// Suyog
// Mansi




console.log('***************************************************************')




//Program 8
//print firstName: skill when firstName start 's'
// using forEach()
employee.forEach(el=>
{
    if(el.firstName.startsWith('S'))
    {
        console.log(el.firstName+':'+el.skills)
    }
})

// o/p-->
// Suyog:Javascript,Java,c,salesforce
// Samir:Java,python,React,salesforce

//OR
// using filter()

let b=employee.filter(el=>
{
    return el.firstName.startsWith('S')
})
console.log(b)

b.forEach(el=>
{
    console.log(el.firstName+':'+el.skills)
})

// o/p-->
// Suyog:Javascript,Java,c,salesforce
// Samir:Java,python,React,salesforce



console.log('********************************************')



//Program 9
//add value 'Country = India' in all element

employee.forEach(el=>
{
   el.Country="India"
})
console.log(employee)

// o/p-->
// [
//     {
//       firstName: 'Suyog',
//       lastName: 'Rahane',
//       age: 22,
//       city: 'Sangamner',
//       skills: [ 'Javascript', 'Java', 'c', 'salesforce' ],
//       Country: 'India'
//     },
//     {
//       firstName: 'Amol',
//       lastName: 'Vetal',
//       age: 23,
//       city: 'Talegoan',
//       skills: [ 'SQL', 'Selenium', 'MangoDB', 'salesforce' ],
//       Country: 'India'
//     },
//     {
//       firstName: 'Mansi',
//       lastName: 'Khatode',
//       age: 32,
//       city: 'Sangamner',
//       skills: [ 'Java', 'Cypress', 'Manual', 'salesforce' ],
//       Country: 'India'
//     },
//     {
//       firstName: 'Samir',
//       lastName: 'Choughule',
//       age: 40,
//       city: 'Pune',
//       skills: [ 'Java', 'python', 'React', 'salesforce' ],
//       Country: 'India'
//     }
//   ]

console.log('*********************************************************')


//Program 10
//if age<30 => then add 10 in it  then print sum and avg of above 30 ages

//1 add 10 
employee.forEach(el=>
{
    if(el.age<30)
    {
        el.age= el.age+10
    }
})
console.log(employee)
// o/p-->
// [
//     {
//       firstName: 'Suyog',
//       lastName: 'Rahane',
//       age: 32,
//       city: 'Sangamner',
//       skills: [ 'Javascript', 'Java', 'c', 'salesforce' ],
//       Country: 'India'
//     },
//     {
//       firstName: 'Amol',
//       lastName: 'Vetal',
//       age: 33,
//       city: 'Talegoan',
//       skills: [ 'SQL', 'Selenium', 'MangoDB', 'salesforce' ],
//       Country: 'India'
//     },
//     {
//       firstName: 'Mansi',
//       lastName: 'Khatode',
//       age: 32,
//       city: 'Sangamner',
//       skills: [ 'Java', 'Cypress', 'Manual', 'salesforce' ],
//       Country: 'India'
//     },
//     {
//       firstName: 'Samir',
//       lastName: 'Choughule',
//       age: 40,
//       city: 'Pune',
//       skills: [ 'Java', 'python', 'React', 'salesforce' ],
//       Country: 'India'
//     }
//   ]

//2. filter above 30 ages
let above30=employee.filter(el=>
{
    return el.age>30
})
console.log(above30)

//3. sum 

let result=above30.reduce(function(acc,el)
{
   return acc + el.age
},0)
console.log(result)

// o/p--> 137

//4. average
console.log(result/above30.length)

// o/p--> 34.25