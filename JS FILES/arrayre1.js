//property
//1. length

let student=['suyog','sagar','amol','sanket','ajit']
let a1=student.length
console.log(a1)     //o/p--> 5




console.log('*************************************************************')



//methods

//1.push()

student=['suyog','sagar','amol','sanket','ajit']
console.log(student.length)     //o/p--> 5

let a2=student.push('mahesh')
console.log(a2)                //o/p--> 6

console.log(student)           //o/p--> [ 'suyog', 'sagar', 'amol', 'sanket', 'ajit', 'mahesh' ]



console.log('*************************************************************************************')



//2. unshift()

student=['suyog','sagar','amol','sanket','ajit']
console.log( student.length)       //o/p--> 5


let a3= student.unshift('mahesh')
console.log(a3)                   //o/p--> 6

console.log(student)             //o/p-->  [ 'mahesh', 'suyog', 'sagar', 'amol', 'sanket', 'ajit' ]


//3. pop()

student=['suyog','sagar','amol','sanket','ajit']
console.log(student.length)         //o/p--> 5

let a4=student.pop()
console.log(a4)                   //o/p--> ajit

console.log(student)              //o/p--> [ 'suyog', 'sagar', 'amol', 'sanket' ]



console.log('*************************************************************')


//4.shift()

student=['suyog','sagar','amol','sanket','ajit']
console.log(student.length)       //o/p-->  5

let a5=student.shift()
console.log(a5)                   //o/p--> suyog

console.log(student)              //o/p-->  [ 'sagar', 'amol', 'sanket', 'ajit' ]



console.log('**************************************************************************')



//5.includes()

student=['suyog','sagar','amol','sanket','ajit']
console.log(student.length)        //o/p-->    5


let a6=student.includes('sagar')
console.log(a6)                      //o/p--> true

let a7=student.includes('mahesh')
console.log(a7)                      //o/p--> false
 


console.log('**************************************************************************')


//6. indexOf()
//          0       1      2       3        4
student=['suyog','sagar','amol','sanket','ajit']
console.log(student.length)        //o/p-->  5

let a8=student.indexOf('ajit')
console.log(a8)                 //o/p--> 4

let a9=student.indexOf('rahul')
console.log(a9)                //o/p--> -1



