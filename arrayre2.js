//7. join()

//          0       1      2       3        4
student=['suyog','sagar','amol','sanket','ajit']
console.log(student.length)        //o/p-->  5

let a10=student.join('$')
console.log(a10)                 //o/p--> suyog$sagar$amol$sanket$ajit


console.log('******************************************************')


//8. concat()

student=['suyog','sagar','amol','sanket','ajit']
let student1=['rohit','akash']
console.log(student.length)        //o/p-->  5

let a11=student.concat(student1)
console.log(a11)                 //o/p--> ['suyog','sagar','amol','sanket','ajit','rohit','akash']


console.log('************************************************************')


//9. flat()

student=[['suyog','sagar'],['amol','sanket'],['ajit','rohit','akash']]

console.log(student.length)        //o/p-->  3

let a12=student.flat()
console.log(a12)                 //o/p--> ['suyog','sagar','amol','sanket','ajit','rohit','akash']


console.log('************************************************************')


//10. reverse()

student=['suyog','sagar','amol','sanket','ajit','rohit','akash']

console.log(student.length)        //o/p-->  7

let a13=student.reverse()
console.log(a13)                 //o/p--> [akash', 'rohit','ajit',  'sanket','amol',  'sagar','suyog']



console.log('************************************************************')


//11. sort()

student=['suyog','sagar','amol','sanket','ajit','rohit','akash']

console.log(student.length)        //o/p-->  7

let a14=student.sort()
console.log(a14)                 //o/p--> ['ajit',  'akash','amol',  'rohit','sagar', 'sanket','suyog']

console.log('**********************************************************')


//12. splice()

student=['suyog','sagar','amol','sanket','ajit','rohit','akash']

console.log(student.length)        //o/p-->  7

let a15=student.splice(1,2)
console.log(a15)                 //o/p--> ['sagar','amol']
console.log(student)             //o/p--> [ 'suyog', 'sanket', 'ajit', 'rohit', 'akash' ]
