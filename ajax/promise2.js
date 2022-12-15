// program 1 --> resolve

// function createUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('user created successfully')
//         }, 3000)
//     })
// }

// function getUserId(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('getting user id')
//         },2000)
//     })
// }

// function getInfo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             resolve('display information')
//         },1000)
//     })
// }

// createUser() 
// .then (function(res){
//     console.log(res)
//     return getUserId()
// }) 
// .then(function(res){
//     console.log(res)
//     return getInfo()
// })
// .then((res)=>{
//     console.log(res)
// })

// o/p-->
// user created successfully
// getting user id
// display information

// program 2 --> resolve, reject

// function createUser() {
//     return new Promise(function (resolve, reject) {
//         let string = 'suyog'
//         if (string.length == 5) {
//             setTimeout(function () {
//                 resolve('user created successfully')
//             }, 3000)
//         } else {
//             setTimeout(function () {
//                 reject('user created fail')
//             }, 3000)
//         }
//     })
// }

// function getUserId() {
//     return new Promise((resolve, reject) => {
//         let string = 'suyog'
//         if (string.length == 5) {
//             setTimeout(() => {
//                 resolve('getting user id')
//             }, 2000)
//         } else {
//             setTimeout(function () {
//                 reject('getting user id fail')
//             }, 2000)
//         }
//     })
// }

// function getInfo() {
//     return new Promise(function (resolve, reject) {
//         let string = 'suyog'
//         if (string.length == 5) {
//             setTimeout(() => {
//                 resolve('display information')
//             }, 1000)
//         } else {
//             setTimeout(() => {
//                 reject('display information fail')
//             }, 1000)
//         }
//     })
// }

// createUser()
//     .then(function (res) {
//         console.log(res)
//         return getUserId()
//     }).catch(function (res) {
//         console.log(res)
//         return getUserId()
//     })
//     .then(function (res) {
//         console.log(res)
//         return getInfo()
//     }).catch(function (res) {
//         console.log(res)
//         return getInfo()
//     })
//     .then((res) => {
//         console.log(res)
//     }).catch(function (res) {
//         console.log(res)

//     })
    
// o/p-- >
// user created successfully
// getting user id
// display information


function createUser() {
    return new Promise(function (resolve, reject) {
        let string = 'suyogR'
        if (string.length == 5) {
            setTimeout(function () {
                resolve('user created successfully')
            }, 3000)
        } else {
            setTimeout(function () {
                reject('user created fail')
            }, 3000)
        }
    })
}

function getUserId() {
    return new Promise((resolve, reject) => {
        let string = 'suyogR'
        if (string.length == 5) {
            setTimeout(() => {
                resolve('getting user id')
            }, 2000)
        } else {
            setTimeout(function () {
                reject('getting user id fail')
            }, 2000)
        }
    })
}

function getInfo() {
    return new Promise(function (resolve, reject) {
        let string = 'suyogR'
        if (string.length == 5) {
            setTimeout(() => {
                resolve('display information')
            }, 1000)
        } else {
            setTimeout(() => {
                reject('display information fail')
            }, 1000)
        }
    })
}

createUser()
    .then(function (res) {
        console.log(res)
        return getUserId()
    }).catch(function (res) {
        console.log(res)
        return getUserId()
    })
    .then(function (res) {
        console.log(res)
        return getInfo()
    }).catch(function (res) {
        console.log(res)
        return getInfo()
    })
    .then((res) => {
        console.log(res)
    }).catch(function (res) {
        console.log(res)

    })

// o/p-->
// user created fail
// getting user id fail
// display information fail