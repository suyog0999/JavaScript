//typeof
let a1="suyog"
console.log(typeof a1)  //o/p-> string

let a2=10
console.log(typeof a2)  //o/p-> number

let a3="suyog10"
console.log(typeof a3)  //o/p-> string

let a4=true
console.log(typeof a4)  //o/p-> boolean

// in javasript everything is an object
//javascript is case sensetive langauge
//string interpolation like "--abc--"  '--abc--' `-abc---`
//javascript-----property and methods


//porperty
//1.length
let firstName="suyog"
let a5=firstName.length
console.log(a5)          //o/p->  5



//method------action and return
//1.toUpperCase()
let city="pune"
let a6=city.toUpperCase()
console.log(a6)           //o/p->  PUNE

//2.toLowerCase()
let City="MUMBAI"
let a7=City.toLowerCase()
console.log(a7)           //o/p->  mumbai

//4.includes()
let state="punjab"
let a8=state.includes('p')
console.log(a8)           //o/p->  true

let a9=state.includes('P')
console.log(a9)           //o/p->  false

//5.startsWith()
let name="suyog"
let a10=name.startsWith('s')
console.log(a10)           //o/p->  true

let a11=name.startsWith('uy')
console.log(a11)           //o/p->  false

//5.endsWith()
let fname="suyog"
let a12=fname.endsWith('g')
console.log(a12)           //o/p->  true

let a13=fname.endsWith('yo')
console.log(a13)           //o/p->  false

//6.trimStart()
let vehical=" audi"
console.log(vehical.length) //o/p-> 5
let a14=vehical.trimStart()
console.log(a14)            //o/p-> audi
console.log(a14.length)     //o/p-> 4

//7.trimEnd()
let lname="rahane "
console.log(lname.length)  //o/p->  7
let a15=lname.trimEnd()
console.log(a15)           //o/p->  rahane
console.log(a15.length)    //o/p->  6

//8.trim()
let sport=" kabaddi "
console.log(sport)
console.log(sport.length)  //o/p->  9
let a16=sport.trim()
console.log(a16)           //o/p->  kabaddi
console.log(a16.length)    //o/p->  7

//9.indexOf()                // 0  1  2  3  4  5  6 
let sport1="cricket"         // c  r  i  c  k  e  t
console.log(sport1.length)   //o/p->  7
let a17=sport1.indexOf('k')
console.log(a17)             //o/p->  4
console.log(typeof a17)      //o/p->  number
let a18=sport1.indexOf('f')
console.log(a18)             //o/p->  -1  
//coz respective char is not present in given string



//10.charAt()                 // 0  1  2  3  4  5  6  7
let sport2="football"         // f  o  o  t  b  a  l  l
console.log(sport2.length)    //o/p->  8
let a19=sport2.charAt(3)
console.log(a19)              //o/p->  t
console.log(typeof a19)       //o/p->  string




                              //-4 -3 -2 -1
//11.slice()                  // 0  1  2  3
let sport3="golf"             // g  o  l  f

console.log(sport3.length)    //o/p->   4

let a20=sport3.slice(1,3)
console.log(a20)              //o/p->  ol

let a21=sport3.slice(-4,-2)
console.log(a21)              //o/p->  go

let a22=sport3.slice(3,1)
console.log(a22)              // blank  
//because it accept a index value in left to rigth format


//12.replace()
let z="i am learn javascript and javscript is very easy lang"
console.log(z)
let a23=z.replace('javascript','python')
console.log(a23)

//o/p->  i am learn javascript and javscript is very easy lang
//       i am learn python and javscript is very easy lang      


//13.replaceAll()
let string="i am learn java and java is very easy lang"
let a24=string.replaceAll('java','python')
console.log(a24)

//o/p->  i am learn python and python is very easy lang


//14.split()
//action--> remove the particular character and add ,(semicolan) that particular char position
//return ---> array

let Name = "Suyog Bhausaheb Rahane"

let q2 = Name.split(' ')     //o/p---->  [ 'Suyog', 'Bhausaheb', 'Rahane' ]
console.log(q2)


let q3 = Name.split('a')     //o/p---->  [ 'Suyog Bh', 'us', 'heb R', 'h', 'ne' ]                    
console.log(q3)
