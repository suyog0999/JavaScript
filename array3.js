//13.map()

// ex- given array is[3,5,7] and we want new array array1[5,7,9]

//solution using for loop
 let array=[3,5,7]
 let array1=[]
 for(i=0;i<array.length;i++)
 {
    let add=array[i]+2
    array1.push(add)
 }
 console.log(array1)

 //o/p->  [ 5, 7, 9 ]


 //solution using map() method
//map()
//action----->perform operation with each element of array
//return----->array
// syntax--->
// arrayname.map(callbackFunction (element,index,array)
// {
//     return operation
// })
let number=[3,5,7]
let number1=number.map(function(el,index,arr)
{
   return el+2
})
console.log(number1)

//o/p---> [ 5, 7, 9 ]


console.log('---------------------------------------------------------------')



//14.filter()
//action----->perform operation with each element of array and filter particular element
//return----->array
// syntax--->
//  arrayname.filter(callbackFunction (element,index,array)
// {
//     return operation
// })

//ex--> 1.  array=['rahane','sahane','sarode','phatangare','revgade','pande','mhaske']
// we want to o/p like array1=['rahane','sahane','sarode','mhaske']

//solution using for loop
let surname=['rahane','sahane','sarode','phatangare','revgade','pande','mhaske']
let surname1=[]
for(i=0;i<surname.length;i++)
{
    if(surname[i].length==6)
    {
       surname1.push(surname[i])
    }
}
console.log(surname1)

//o/p-->   [ 'rahane', 'sahane', 'sarode', 'mhaske' ]


//solution usin filter() method

let name=['rahane','sahane','sarode','phatangare','revgade','pande','mhaske']
let name1=name.filter(function(el,index,arr)
{
    return el.length==6
})
console.log(name1) 

//o/p->  [ 'rahane', 'sahane', 'sarode', 'mhaske' ]



//ex 2, find the >20 numbers 
// array=[10,20,15,25,30,35,22,11,18,19]
//expected o/p--> array1=[25,30,35,22]
//solution using filter method

let marks=[10,20,15,25,30,35,22,11,18,19]
let marks1=marks.filter(function(el,index,arr)
{
    return el>20
})
console.log(marks1)

//o/p-->  [ 25, 30, 35, 22 ]


console.log('---------------------------------------------------------------')


//15.reduce()

//action----->return single value by performing action with each element
//return----->a single value
// syntax--->
//  arrayname.reduce(callbackFunction (prv value(acc),current value(el),index,array)
// {
//     return operation
// },0)  0 is by default value

//ex addition of all element
// array=[1,2,3,4,5,6,7,8,9]
//expected o/p--> array1=[45]

//solution using for loop
let num=[1,2,3,4,5,6,7,8,9]
let sum=0
for(i=0;i<num.length;i++)
{
    sum=sum+num[i]
} 
console.log(sum)

//o/p-->  45

//solution using reduce() method
let num1=[1,2,3,4,5,6,7,8,9]
let addition=num1.reduce(function(acc,el,index,arr)
{
    return acc+el
},0)
console.log(addition)

//o/p--->  45


console.log('---------------------------------------------------------------')



//16.forEach()
//action----->perform operation with each element of array its works similar to for loop
//return----->nothing
// syntax--->
//  arrayname.forEach(callbackFunction (current value(el),index,array)
// {
//     statement
// })

//ex--> input--> ['suyog','sagar','mahesh','amol','rohit']
//expected o/p-->hello suyog !
//               hello sagar !
//               hello mahesh !
//               hello amol !
//               hello rohit !

//solution using for loop

let student=['suyog','sagar','mahesh','amol','rohit']
console.log(student)
for(i=0;i<student.length;i++)
{
//console.log('hello' + el + '!')                 // + it is also used to concat string but without space
console.log(`hello ${student[i]} !`)                  // interpolation statement is only return in backtecs `--`
}                                                     // interpolation is used to concat two string with space
// o/p
// hello suyog !
// hello sagar !
// hello mahesh !
// hello amol !
// hello rohit !


//solution using forEach()
student=['suyog','sagar','mahesh','amol','rohit']
console.log(student)
student.forEach(function(el,index,arr)
{
// console.log('hello' +  el + '!') or             // without space
console.log(`hello ${el} !`)                       // interpolation statement is only return in backtecs `--`
})
// o/p
// hello suyog !
// hello sagar !
// hello mahesh !
// hello amol !
// hello rohit !


let numbers=[10,20,30,40,50,60]
numbers.forEach(function(el,index,arr)
{
    console.log(el+2)
})

// o/p
// 12
// 22
// 32
// 42
// 52
// 62



console.log('---------------------------------------------------------------')



//16.some()
// action--> based on condition method checked some element are present or not if present it return true otherwise it return false
// return--> boolean(true || false)
// syntax--->
//  arrayname.some(callbackFunction (element,index,array)
// {
//     return operation
// })
let num2= [2, 3, 4, 5, 6, 7, 8, 9]
let b1=num2.some(function(el,index,arr)
{
    return el>5
})
console.log(b1)
//o/p--> true



console.log('---------------------------------------------------------------')



//17.every()
// action--> based on condition method checked every element are present or not if present it return true otherwise it return false
// return--> boolean(true || false)
// syntax--->
//  arrayname.every(callbackFunction (element,index,array)
// {
//     return operation
// })
let num3= [2, 3, 4, 5, 6, 7, 8, 9]
let b2=num3.every(function(el,index,arr)
{
    return el>5
})
console.log(b2)
//o/p--> false


console.log('---------------------------------------------------------------')



//18.find()
// action--> based on condition method find first element and return the particular element
// return--> single element
// syntax--->
//  arrayname.find(callbackFunction (element,index,array)
// {
//     return operation
// })
let num4= [2, 3, 4, 5, 6, 7, 8, 9]
let b3=num4.find(function(el,index,arr)
{
    return el>5
})
console.log(b3)
//o/p--> 6


console.log('---------------------------------------------------------------')



//19.findIndex()
// action--> based on condition method find  element and return the index of particular element 
// return--> number
// syntax--->
//  arrayname.findIndex(callbackFunction (element,index,array)
// {
//     return operation
// })

let num5= [2, 3, 4, 5, 6, 7, 8, 9]
let b4=num5.findIndex(function(el,index,arr)
{
    return el==5
})
console.log(b4)
//o/p--> 3

// by using arrow => function
let d1=num5.findIndex((el)=>
{
    return el==5
})
console.log(d1)     //o/p--> 3