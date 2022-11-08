// Set => datatype
// set store only unique value i.e it not accept duplicate value


let mySet = new Set()
console.log(mySet)

// o/p--> Set(0) {}


console.log('*********************************************')


// in javascript everything is object so Set is also object i.e set having properties and methods


// property
//1. size

let seta = new Set(['suyog', 'shubham', 'sahil', 'mahesh'])
console.log(seta)      // o/p-->  Set(4) { 'suyog', 'shubham', 'sahil', 'mahesh' }

console.log(seta.size)  // o/p-->  4


console.log('*********************************************')

// methods()
//1. add()
// action--> add new element in a Set
// return--> Set

seta = new Set(['suyog', 'shubham', 'sahil', 'mahesh'])
seta.add('rohit')
console.log(seta)

// o/p-->  Set(5) { 'suyog', 'shubham', 'sahil', 'mahesh', 'rohit' }

console.log("**********************************************")


//2. has()
// action--> it determine  the particular value is present or not in particular Set if value is present it return true oterwise it return false
// return--> boolean value(true or false)

seta = new Set(['suyog', 'shubham', 'sahil', 'mahesh'])
let a=seta.has('mahesh')
console.log(a)     // o/p--> true

console.log(typeof seta.has()) //o/p--> boolean

let b=seta.has('mangesh')
console.log(b)  // o/p--> false

console.log("********************************************************")

//3. delete()
// action-->  if particular value are present in particular Set it return true and delete it ow the value is not present in particular Set it return false
// return--> boolean value (true or false)

seta = new Set(['suyog', 'shubham', 'sahil', 'mahesh'])
let c=seta.delete('shubham')
console.log(c)     // o/p--> true
console.log(seta)  // o/p--> Set(3) { 'suyog', 'sahil', 'mahesh' }

seta = new Set(['suyog', 'shubham', 'sahil', 'mahesh'])
let d=seta.delete('')
console.log(d)     // o/p--> false
console.log(seta)
console.log(typeof seta.delete())  // o/p--> boolean


console.log('***********************************************************')


//4. clear()
// action--> clear the particular Set values
// return--> empty Set


seta = new Set(['suyog', 'shubham', 'sahil', 'mahesh'])
seta.clear()
console.log(seta)  //o/p--> Set(0) {}


console.log('**********************************************************')


//5. forEach()

let set2 = new Set([11, 22, 33, 44, 55,66])
set2.forEach(el=>console.log(el))
// o/p-->
// 11
// 22
// 33
// 44
// 55
// 66

//  for loop

for(let value of set2 ){
    console.log(value)
}

// o/p-->
// 11
// 22
// 33
// 44
// 55
// 66


