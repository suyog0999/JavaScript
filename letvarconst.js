// keywards
// 1 let 
// 2 const 
// 3 var


// let
let x = 20
console.log(x)   // 20

x = 1000
console.log(x) // 1000  --> we can update the value in let keyword

const y = 200
console.log(y) // 200

// y=400
// console.log(y)  // error --> we can't update the variable value with const keyword


console.log("***************************************************************************")


//  Scope
//  let and const block scope

//  Program 1
//  {---} => block

{
    let z = 20
    console.log(z) //20
}
//console.log(z) //  error  --> coz here we cant global varible

console.log("***************************************************************************")

//Program 2

let b = 200 // global
{
    let b = 500
    console.log(b) //  500
}
console.log(b)   //  200


console.log("***************************************************************************")

//Progarm 3

let a2 = 900  //200

{
    console.log(a2) // 900
    a2 = 200
    console.log(a2) //  200
}
console.log(a2)  //  200



console.log("***************************************************************************")

// const
//Program 4 

// {
//     const x1 = 300
// }
// console.log(x1) // error--> coz here we cant global varible

console.log("***************************************************************************")

//Progarm 5

const p1 = 100
{
    const p1 = 400
    console.log(p1) //400
}
console.log(p1) //100

console.log("***************************************************************************")

//Program 6
const k = 600
{
    console.log(k) // 600
   // k = 999 //  update
  // console.log(k) //error  --> we can't update the variable value with const keyword
}
console.log(k)  //600



console.log("***************************************************************************")


// var
//Program 7


{
    var p = 222
}
console.log(p) //222

//let and const having block scope
//Var dont have block scope
//var having function scope
console.log("***************************************************************************")

//Program 8
var num = 100  //globally
function add() {
    var num = 200    //  new memory
    console.log(num)  //  200
}

console.log(num) //  100
add()
console.log(num) //  100

console.log("********************************************")


//program 9
function a() {
    var t1 = 999
    console.log(t1) //  999
}
a()
// console.log(t1) // error  --> coz here we cant global varible

console.log("***************************************************************************")


//let => reassign possible

let a1 = 200 
console.log(a1)  //  200
a1 = 300         //  update
console.log(a1)  //  300

//const => reassign is not possible
const y1=999
console.log(y1)   //  999
//y1=555            //  update
// console.log(y1) //error

//var => reassign is possible
var w1=300
console.log(w1) // 300
w1=8
console.log(w1) // 8


//let => redeclaration is not possible
// let a=20
// let a=30
// console.log(a)

//const => redeclaration is not possible
// const y3=100
// const y3=700
// console.log(y2)

//var =>redeclaration is possible
var m1=100
var m1=900
console.log(m1) //900