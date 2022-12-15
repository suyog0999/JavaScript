
// asyn code manage by
// 1. call back hell
// 2. promise
// 3. async wait


// 2. promise ( pending , resolve , reject)
//to execute asynch code synchronously
//to execute asynch code with parallel execution

// program 1

let p1 = new Promise(function (resolve, reject) {
    let a = 34
    let b = 34

    if (a == b) {
        resolve('a and b are equal')
    }
    else {
        reject('a and b are not equal')
    }
})
p1.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})

// o/p--> a and b are equal

//console.log("************************************************")


// program 2

let p2 = new Promise(function (resolve, reject) {
    let a = 9000
    let b = 900
    if (a == b) {
        resolve([11, 22, 33])
    }
    else {
        reject([-11, -22, -33])
    }
})
p2.then(function (q1) {
    console.log(q1[0])
}, function (q2) {
    console.log(q2)
})
// o/p--> [ -11, -22, -33 ]


// catch--> display reject condition only 
let p3 = new Promise(function (resolve, reject) {
    let a = 30
    let b = 30
    if (a == b) {
        resolve([11, 22, 33])
    }
    else {
        reject([-11, -22, -33])
    }
})
p3
.then(function (q1) {
    console.log(q1[0])
}).
catch(function(q2){
    console.log(q2[2])
})
// o/p--> 11

//console.log("************************************************")


// finally--> always execute ie it execute both condition

let p4 = new Promise(function (resolve, reject) {
    let a = 50
    let b = 50
    if (a == b) {
        resolve([11, 22, 33])
    }
    else {
        reject([-11, -22, -33])
    }
})
p4
.then(function (q1) {
    console.log(q1[0])
}).
catch(function(q2){
    console.log(q2[2])
})
.finally(function(){
    console.log("always executed in any condition")
})


// o/p-->
// 11
// always executed in any condition