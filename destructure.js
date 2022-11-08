// let name='suyog'
// let a=name
// console.log(a)  //o/p--> suyog


// destructure
//  less line of code

//1. with array

let student = ['suyog', 'sagar', 'amol', 'mahesh', 'ajit']
let [a1, b1, c1, d1, e1] = student
console.log(a1, b1, c1, d1, e1)     //o/p--> suyog sagar amol mahesh ajit

// OR
console.log(a1)    //o/p--> suyog
console.log(b1)    //o/p--> sagar
console.log(c1)    //o/p--> amol
console.log(d1)    //o/p--> mahesh
console.log(e1)    //o/p--> ajit



console.log("**********************************************************")





//2. with nested array
let numbers = [[11, 22, 33], [44, 55, 66], [77, 88, 99]]
console.log(numbers[0])           // o/p--> [11, 22, 33]
console.log(numbers[0][0])        // o/p--> 11

let [[p1, p2, p3], [p4, p5, p6], [p7, p8, p9]] = numbers
console.log(p8)     //o/p--> 88
console.log(p3)     //o/p--> 33



console.log("**********************************************************")



//3.with object
let person =
{
    firstName: "suyog",
    lastName: "rahane",
    rollNo: 12
}

let { firstName, lastName, rollNo } = person

console.log(firstName)    // o/p--> suyog

console.log(lastName)    // o/p--> rahane

console.log(rollNo)       // o/p--> 12




let vehical = {
    color: 'red',
    wheel: 4
}
// with object => custom name
let { color: a0, wheel: w0 } = vehical
console.log(a0)   //o/p--> red

console.log(w0)    //o/p--> 4



console.log("**************************************************")

//4. nested Object


let info = {
    firstName1: "Suyog",
    family: {
        father: "Bhausaheb",
        mother: "Sunita"
    }

}
let { firstName1, family: { father, mother } } = info
console.log(firstName1)   //o/p--> Suyog
console.log(mother)       //o/p--> Sunita

// OR using custom name
// let { firstName1:aa, family:gg  } = info

// console.log(aa)   //o/p--> Suyog

// console.log(gg)     //o/p--> {father: "Bhausaheb",mother: "Sunita"}


// let { father:a, mother:b } = gg
// console.log(a)    //o/p--> Bhausaheb