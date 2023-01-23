//let

let x
console.log(x)     //o/p--->  undefined


let a=10
console.log(a)      
//o/p---->   10

a=100
console.log(100)                     
//o/p--->    100

console.log(typeof a)
//o/p---> number

console.log(`------------------------------------------`)

let name='suyog'
console.log(name)                    
//o/p---->  suyog

console.log(typeof name)
//o/p---> string

console.log(`--------------------------------------------`)


//const
const b=100
console.log(b)
//o/p----->   100

// b=200
// console.log(b)
// o/p---> error( Assignment to constant variable.)


console.log(`--------------------------------------------`)

/*****arithematical operations*****/


//1.without using function
let s=100
let t=20
console.log(s+t)      //o/p-----> 120
console.log(s-t)      //o/p-----> 80
console.log(s*t)      //o/p-----> 2000
console.log(s/t)      //o/p-----> 5
console.log(s%t)      //o/p-----> 0

console.log(`--------------------------------------------`)

//2.with using function

function Calculator(x,y)
{
    console.log(x+y)      
    console.log(x-y)      
    console.log(x*y)      
    console.log(x/y)      
    console.log(x%y)      
}
Calculator(1000,200)
// o/p-->
// 1200
// 800
// 200000
// 5
// 0

Calculator(500,100)
// o/p
// 600
// 400
// 50000
// 5
// 0


console.log(`--------------------------------------------`)



//function without parameter and without return type

function ADD()
{
    console.log(9+9)
}
ADD()                //o/p------> 18


console.log(`--------------------------------------------`)

//function with parameter and without return type

function ADD2(x,y)
{
    console.log(x+y)
}
ADD2(10,10)            //o/p----> 20



console.log(`--------------------------------------------`)

//function with parameter and with return type

function ADD3(x,y)
{
    return x+y
}
let a1=ADD3(20,20)
console.log(a1)          //o/p-----> 40

console.log(a1-20)       //o/p-----> 20
console.log(a1*2)        //o/p-----> 80
console.log(a1/2)        //o/p-----> 20
console.log(a1%2)        //o/p-----> 0