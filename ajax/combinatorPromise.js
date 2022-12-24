

// AJAX
///// asyn sync///// 
// async ---- execution sync 
// call back hell
// promises
// pending resolve  reject 
// consuming promise with .then 
// async await 

// api  -- 2
// api2 -- 2
// api3 -- 2  


console.log("*******************************************************")

// Promise combinators --- parallel 


// Promise.all        -->	shortcircuit (throw error) when the  the input value is rejected
// Promise.allSettled -->	does not shortcircuit (do not throw error) , print both condition resolve or rejected
// Promise.race	      -->   shortcircuit when the  the input value is settled , print first come condition(less time condition)
// Promise.any        -->	shortcuit at first resolve(less timed resolve) , ignore others


// 1 promise.all --> print only resolve condition ow throw error
// ex 1
async function getUsers() {
    let a = await Promise.all([
        Promise.resolve("hello"),
        Promise.resolve("hello"),
        Promise.resolve("hi")
    ])
    console.log(a)
}
// getUsers() // o/p --> hello hello hi


// will not get the output coz input value contain a rejected 
// ex 2
// async function getUsers(){
//     let a = await Promise.all([
//         Promise.resolve("hello"),
//         Promise.reject("hello"),
//         Promise.resolve("hi")
//     ])
//     console.log(a)
// }
// getUsers() // o/p--> error


console.log("********************************************************************")


// 2 promise.allSettled--> print both condition resolve or rejected

// async function getUsers2() {
//     let b = await Promise.allSettled([
//         Promise.resolve("hello"),
//         Promise.reject("bye"),
//         Promise.resolve("hi"),
//         Promise.reject('bye')
//     ])
//     console.log(b)
// }
// getUsers2()
// o/p-->
// hello
// bye
// hi
// bye

console.log("****************************************************************")

// 3 promise.race-->  

async function getUser3() {
    let a = await Promise.race([
        new Promise(function (reject) {
            setTimeout(function () {
                reject("bye")
            }, 00)
        }),
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve("hello")
            }, 1000)
        })
    ])
    console.log(a)
}
//getUser3()
// o/p--> bye  rejected codition call coz time is less than resolve 


console.log("********************************************************************")




// 4.promise.any--> shortcuit at first resolve(less timed resolve) , ignore others
                // -->  it only gives less timed resolve state output

async function getUser4() {
    let a = await Promise.any([
        new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("bye1")
            }, 1000)
        }),
        new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject("bye2")
            }, 000)
        }),
        new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("hello1")
            }, 000)
        }),
        new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("hello2")
            }, 4000)
        })

    ])
    console.log(a)

}
getUser4()

// o/p--> hello1  