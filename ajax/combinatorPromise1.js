// combinator Promise

// 1. promise.all ----->  reject --- shorcuit ===> array 

let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise-1')
    }, 1000)

})


let p2=new Promise((resolve)=>{
    setTimeout(() => {
        resolve('promise-2')
    }, 2000);
})

let p3=new Promise((resolve)=>{
    setTimeout(() => {
        resolve('promise-3')
    }, 3000);
})

let p4=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject('promise-4')
    }, 0000);
})


// 1. promise.all ----->  reject --- shorcuit ===> array 

async function getUser(){
   let p= await Promise.all([
        p1,
        p2,
        p3,
        p4
    ])
    console.log(p)
}
// getUser() 
// o/p--> error

// to handeled error we can use try catch blocks


 async function getUser1(){
    try{
        console.log( await Promise.all([
            p1,
            p2,
            p3 ,
            p4
        ]))
    }
    catch{
        console.log("Error occured")
    }
}
// getUser1()
// console.log('Hello i am running')
// o/p
// Hello i am running
// Error occured


console.log("******************************************************************")


// 2. promise.allSettled--> return  array

async function getUser2(){
let a= await Promise.allSettled([
        p1,
        p2,
        p3,
        p4

    ])
    console.log(a)
    console.log ('I learn js')
}
//getUser2()
// o/p
// [
//     { status: 'fulfilled', value: 'promise-1' },
//     { status: 'fulfilled', value: 'promise-2' },
//     { status: 'fulfilled', value: 'promise-3' },
//     { status: 'rejected', reason: 'promise-4' }
//   ]


console.log("*****************************************************************")

// 3. promise.race--> whoever either resolve or reject (print first come condition(less time condition))
 
async function getUser3(){
  let a1=  await Promise.race([
        p1,
        p2,
        p3,
        p4
    ])
    console.log(a1)
}
getUser3()
// o/p--> error here p4 varible time is less and p4 is in rejected condition


console.log("***************************************************************************")


// 4. promise.any--> print first resolve(less time) only

async function getUser4(){
    let a3=await Promise.any([
        p1,
        p2,
        p3,
        p4
    ])
    console.log(a3)
}
//getUser4()
// o/p--> promise-1 only print p1(coz less time 1sec)