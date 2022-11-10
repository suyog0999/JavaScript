

//8. startsWith()
//action => check whether the string start with given char or substring
//return => boolean

let fruit='cherry'
let a1=fruit.startsWith('c')
console.log(a1)             //o/p-----> true



let a2=fruit.startsWith('che')
console.log(a2)                 //o/p----> true



let a3=fruit.startsWith('chrr') 
console.log(a3)                  //o/p---> false (not in sequence)




let a4=fruit.startsWith('Che')  
console.log(a4)                 //o/p------> false (js case sensitive)


console.log("*********************************************************")


//9. endWith()
//action => check whether the string end with given char or substring
//return => boolean

let flower='lily'
let y1=flower.endsWith('y')
console.log(y1)                //o/p-----> true



let y11=flower.endsWith('ly')
console.log(y11)                 //o/p----> true



let y2=flower.endsWith('Ily')
console.log(y2)                  //o/p-----> false



console.log("*********************************************************")



//10. charAt()
//action  => give the char of given index
//return => string
// 0  1  2  3
// R  o  s  e

let flower1='Rose'

let u1=flower1.charAt(2)
console.log(u1)             //o/p-----> s



let u2=flower1.charAt(0)
console.log(u2)             //o/p-----> R



let u3=flower1.charAt(1)
console.log(u3)             //o/p------> o