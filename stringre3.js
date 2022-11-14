//11.Slice()
//action =>extract the part of the string
//return =>string

//slice(startposition,endposition)
//1. endposition =>option
//2. endposition not include(0,5)

//left =>right
// -5  -4  -3  -2  -1
//  O   M   S   A   I
//  0   1   2   3   4   

let name = 'OMSAI'

console.log(name)           //o/p----> OMSAI
console.log(typeof student) //o/p---->string



let a1 = name.slice(0, 2)
console.log(a1)             //o/p------> OM



let a2 = name.slice(4)
console.log(a2)            //o/p----->  I


let a3 = name.slice(4, 2)
console.log(a3)            //o/p-----> right to left =>blank output



let a4 = name.slice(-3)
console.log(a4)            //o/p------> SAI



let a5 = name.slice(2, -1) 
console.log(a5)            //o/p-----> SA



let a6 = name.slice(-4, 1)
console.log(a6) //blank


console.log("-------------------------------------------------")



//12.charCodeAt()
//action =>give the ascii value of char at perticular index
//return =>number

//  0  1  2  3  4
//  s  u  y  o  g

let firstName='suyog'
let b1=firstName.charCodeAt(0)
console.log(b1)                    //o/p---> 115

let b2=firstName.charCodeAt(5)
console.log(b2)                    //o/p--->NaN


console.log('********************************************************')


//13.split()
//action--> remove the particular character and add ,(semicolan) that particular char position
//return ---> array

let Name = "Suyog Bhausaheb Rahane"

let q2 = Name.split(' ')     //o/p---->  [ 'Suyog', 'Bhausaheb', 'Rahane' ]
console.log(q2)


let q3 = Name.split('a')     //o/p---->  [ 'Suyog Bh', 'us', 'heb R', 'h', 'ne' ]                    
console.log(q3)

 

console.log('*************************************************')

// number + string ====> string 
// string + number ====> string 
// string + string ====> string 
// number + number ====> number

let a = 10
let b = 20
let c = "hello"

console.log(a+c)     //o/p--> "10hello"
console.log(a+b)     //o/p--> 30
console.log(c+c)     //o/p--> 'hellohello'
console.log(c+b)     //o/p--> 'hello20'
console.log(a+c+b)   //o/p--> '10hello20'
console.log(a+b+c)   //o/p--> '30hello'
console.log(c+a+b)   //o/p--> 'hello1020'


