let u=10
let v=2
console.log(u+v)         //o/p->  12
console.log(u-v)         //o/p->  8
console.log(u*v)         //o/p->  20
console.log(u/v)         //o/p->  5
console.log(u%v)         //o/p->  0




//function
function calculator(a,b)
{
console.log(a+b)           
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
}
calculator(9,9)
//o/p->  18 
//       0
//       81
//       1
//       0




//function without parameter and without return type
function add()
{
    console.log(9+9)
}
add() 
//o/p->  18



//function with parameter and without return type
function addA(x,y)
{
    console.log(x+y)
}
addA(9,9)
//o/p->  18



//function with parameter and with return type
function addB(x,y)
{
    return x+y
}
let a1=addB(9,9)        
console.log(a1)            //o/p->  18
console.log(a1-9)          //o/p->  9
console.log(a1*9)          //o/p->  162
console.log(a1/9)          //o/p->  2



console.log('*************************************************')



// to write function

// 1. function declaration

function add(a, b) 
{
    return a + b
}
let x1 = add(40, 20)
console.log(x1)             //o/p--> 60



// 2. function expression
let add1 = function (x, y) 
{
    return (x + y)
}
let a3 = add1(90, 22)
console.log(a3)            //o/p--> 112


// 3. arrow function
let add2 = (x, y) => 
{
    return (x + y)
}
let a4 = add2(90, 22)
console.log(a4)           //o/p--> 112