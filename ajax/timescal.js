
// // with serialy execute
// let a = function () {
//     return new Promise((resolve) => {
//         setTimeout((resolve), 1000)
//     })
// }

// async function getUser() {
//     console.time('timeSerial')
//     await a();
//     await a();
//     console.timeEnd('timeSerial')
// }
// getUser()
// // o/p-->timeSerial: 2.009s

// console.log("**********************************************")



// // with parallel execute

// // async function getUser1(){
// //     console.time('timeParallel')
// //     await Promise.all([
// //         a(),
// //         a()  
// //     ])
// //     console.timeEnd('timeParallel')
// // }
// // getUser1()
// // o/p--> timeParallel: 1.000s



// async function getUser1(){
//     console.time('timeParallel')
//     await Promise.any([
//         a(),
//         a()  
//     ])
//     console.timeEnd('timeParallel')
// }
// getUser1()
// // o/p--> timeParallel: 1.000s


console.log("*******************************************************************************")



function getuser(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('promise-1')
        }, 3000);
    })
}

function getuser1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise-2')
        }, 2000)
    })
}

function getUser2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise-3')
        }, 3000)
    })
}


// with serialy execute multiple fuction 

async function getUserinfo(){
       console.time('timeserial')
       let a= await getuser()
       let b= await getuser1()
       let c= await getUser2()
       console.timeEnd('timeserial')
       console.log(a,b,c)

}
//getUserinfo()
// o/p-->
// timeserial: 8.038s
// promise-1 promise-2 promise-3

//------------------------------------------------------------------------

 // with parallel execute

 async function getallusertime(){
    console.time('timeparallel')
    let ab= await Promise.all([
        getuser(),
        getUser2(),
        getUser2()
    ])
    console.timeEnd('timeparallel')
    console.log(ab)
 }

 getallusertime()

//  o/p-->

//  timeparallel: 3.011s
// [ 'promise-1', 'promise-3', 'promise-3' ]


