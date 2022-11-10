// MAP => datatype

// let student = {
//     firstName: "Suyog",
//     true: "Rahane",
//     200: true,
//     age: 22,
//     [2,3,4,5]:"skills"
// }


//In object we cant take different datatype keys
// for(let key in student){
//     console.log(typeof(key))
// }
// o/p-->
// string
// string
// string
// string
// string

// in javascript everything is object so Set is also object i.e map having properties and methods
// Map having key value pair

let myMap = new Map()
console.log(myMap)
// o/p--> Map(0) {}

// property
//1. size
console.log(myMap.size)

// o/p--> 0



console.log("**********************************************")




// methods()
//1. set()
// action--> set or add the value in Map
// return--> map

myMap.set('FirstName', 'suyog')
myMap.set(1, 'Marathi')
myMap.set(true, 'isStudent')
console.log(myMap)
// o/p--> Map(3) { 'FirstName' => 'suyog', 1 => 'Marathi', true => 'isStudent' }


myMap.set('FirstName', 'suyog')
myMap.set(1, 'Marathi')
myMap.set(true, 'isStudent')
myMap.set(1, 'English')     // update the particular key value
console.log(myMap)
// o/p--> Map(3) { 'FirstName' => 'suyog', 1 => 'English', true => 'isStudent' }



console.log("**********************************************************************")


//2.has()
// action--> it determine  the particular value is present or not in particular Map if value is present it return true oterwise it return false
// return--> boolean value(true or false)
let a1=['java','c','javascript']
let mapa=new Map([
    ['firstname','Suyog'],
    [1,'Marathi'],
    [true,'isStudent'],
    [a1,'skills']

])
console.log(mapa)
// o/p--> 
// Map(4) {
//     'firstname' => 'Suyog',
//     1 => 'Marathi',
//     true => 'isStudent',
//     [ 'java', 'c', 'javascript' ] => 'skills'
//   }

let u1 = mapa.has(a1)
console.log(u1)
// o/p--> true

console.log("*****************************************************************")

//3. get()
// action--> to retrive the particular keys value
// return--> values of given keys

a1=['java','c','javascript']
mapa=new Map([
    ['firstname','Suyog'],
    [1,'Marathi'],
    [true,'isStudent'],
    [a1,'skills']
])


let u2 = mapa.get(1)
console.log(u2)
// o/p--> Marathi

let u3 = mapa.get(a1)
console.log(u3)
// o/p--> skills

console.log("****************************************************")


//4. delete()
// action-->  if particular value are present in particular Map it return true and delete it ow the value is not present in particular Map it return false
// return--> boolean value (true or false)

a1=['java','c','javascript']
mapa=new Map([
    ['firstname','Suyog'],
    [1,'Marathi'],
    [true,'isStudent'],
    [a1,'skills']
])

let u4=mapa.delete('FirstName')
console.log(u4)  // o/p--> false
console.log(mapa)
//o/p-->
// Map(4) {
//     'firstname' => 'Suyog',
//     1 => 'Marathi',
//     true => 'isStudent',
//     [ 'java', 'c', 'javascript' ] => 'skills'
//   }

let u5=mapa.delete('firstname')
console.log(u5)  // o/p--> true
console.log(mapa)
//o/p-->
// Map(3) {
//     1 => 'Marathi',
//     true => 'isStudent',
//     [ 'java', 'c', 'javascript' ] => 'skills'
//   }





console.log("**********************************************************")






//5. clear()
// action--> clear the particular Map values
// return--> empty Map

a1=['java','c','javascript']
mapa=new Map([
    ['firstname','Suyog'],
    [1,'Marathi'],
    [true,'isStudent'],
    [a1,'skills']
])


mapa.clear()
console.log(mapa)

// o/p--> Map(0) {}

console.log("******************************************************")



a1=['java','c','javascript']
mapa=new Map([
    ['firstname','Suyog'],
    [1,'Marathi'],
    [true,'isStudent'],
    [a1,'skills']
])

//6. key()--> return only all keys name of particular Map

console.log(mapa.keys())

// o/p--> [Map Iterator] { 'firstname', 1, true, [ 'java', 'c', 'javascript' ] }

console.log("******************************************************")


//7. value()--> return only all keys value of particular Map

console.log(mapa.values())

// o/p--> [Map Iterator] { 'Suyog', 'Marathi', 'isStudent', 'skills' }


console.log("******************************************************")


//8. entries()--> return all keys and keys value together of the particular Map

console.log(mapa.entries())

//o/p--> 
// [Map Entries] {
//     [ 'firstname', 'Suyog' ],
//     [ 1, 'Marathi' ],
//     [ true, 'isStudent' ],
//     [ [ 'java', 'c', 'javascript' ], 'skills' ]
//   }



// using for loop

//for loop for keys
for(let key of mapa.keys()){
    console.log(key)
}

//for loop for value
for(let value of mapa.values()){
    console.log(value)
}

//for loop for entries
for(let [key,val] of mapa.entries()){
    console.log(key,val)
}