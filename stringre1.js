//javascript => everythings are object

//javascript includes Property and methods


//student => object
//property => name , rollNumber,height,color,weight
//methods =>learn(), talk(),listen()

//method includes action and return  

//String (Object)
//Property
//Method

/* typeof() */

let firstName="Om Sai"
console.log(typeof firstName)    //o/p--->  string

let fn2='Suyog'
console.log(typeof fn2)        //o/p--->   string

let fruits=`Mango`
console.log(typeof fruits)     //o/p--->  string

let number1="20"
console.log(typeof number1)   //o/p-->  number

console.log('--------------------------------------------')

// //string store the value with the help of index
// // O  m    S  a  i
// // 0  1  2 3  4  5 

console.log(firstName[3])     //o/p---> s
console.log(firstName[1])     //o/p---> m


console.log('--------------------------------------------')

/**property => length**/
console.log(firstName.length)    //o/p-----> 5

let sport ="jymastic"
console.log(sport.length)      //o/p--->  8


console.log('--------------------------------------------')
//Method
//1. toUpperCase()
//action => convert all char of string into capital case
//return  => string

let name = "jasmin"
let a1 = name.toUpperCase()
console.log(a1)                //o/p---->    JASMIN
console.log(typeof a1)         //o/p---->    string



console.log('--------------------------------------------')

//2. toLowerCase()
//action => convert all char in loweCase
//return => string

let name1 = "MANGO"
let b1 = name1.toLowerCase()
console.log(b1)                //o/p---->   mango


console.log('--------------------------------------------')



//3. IndexOF()
//action => give the index of given character , if char nit found then it return -1
//return => number


// s  u  y  o  g
// 0  1  2  3  4  

let name2 = "suyog"
let s1 = name2.indexOf('i')
console.log(s1)                  // o/p---->  -1

let v1 = name2.indexOf('s')
console.log(v1)              //o/p-----> 0



console.log('--------------------------------------------')

//4. includes()
//action => check whether given char is present in string or not
//return => true, false (boolean)

let firstName1="Suyog"
let y11=firstName1.includes('M')
console.log(y11)                      //o/p-----> false

let x12=firstName1.includes('Su')      //o/p---->  true
console.log(x12)




console.log('--------------------------------------------')

//5. trim()
//action => remove the space from start and end
//return => atring

let flower=" sun flower "
console.log(flower.length)             //o/p-----> 12

let d1=flower.trim()
console.log(d1)           //o/p----->sun flower
console.log(d1.length)    //o/p-----> 10


//6. trimStart()
//action => remove the space from start
//return => String

let name3=" yogi"
console.log(name3.length)      // o/p--------->  5
let p1=name3.trimStart()
console.log(p1)               //  o/p---------> yogi
console.log(p1.length)        // o/p--------> 4


let name4=" chetna "
console.log(name4.length)      // o/p---> 8
let p2=name4.trimStart()
console.log(p2)                  // o/p---------> chetna
console.log(p2.length)           // o/p------>   7
   

console.log('******************************************************')


//7. trimEnd()
//action // removed the space from end
//return string
let fruit=" banana "
console.log(fruit.length)  //o/p-------->8
let a6=fruit.trimEnd()     
console.log(a6)            //o/p--------->  banana
console.log(a6.length)     //o/p---->7