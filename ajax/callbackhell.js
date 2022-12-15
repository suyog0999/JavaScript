// AJAX --> Asynchronous JavaScript And XML
// JAVASCRIPT --> it is synchronous lang it's means it execute line by line


// synchronous code

function addA(){
    console.log('I Am New In Cypress')
}

function addB() {
    console.log("I am learning js")
}

addB() //--> first execute 
addA() // -->last execute coz js is synchronos lang


console.log("*********************************************")


// Asynchronous
// setTimeout--> async in nature
// syntax
// setTimeout(callback function(){
//     statement
// },settime in milisec)

function addC() {
    setTimeout(function () {
        console.log("C is called")
    }, 1000)
}

function addD() {
    console.log('D is called')
}
addC()  // --> last execute  coz its define asynchronosly
addD()  // --> first execute



//console.log("**************************************************")


 
// 3 functions (async execution)

//  create user(100 user)
//  get user by id(2)
// print info

function UserInfoDisplay (){
    setTimeout(function(){
        console.log('user created')
    },3000)

    setTimeout(function(){
        console.log('get Info by Id')
    },2000)
    setTimeout(function(){
        console.log('display user info')
    },1000)
}

UserInfoDisplay ()
// o/p--> 
// display user info
// get Info by Id
// user created


//console.log("**********************************************")


//1. call back hell (async-->sync)


function getInfoDisplay() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('Get Id for user')
            setTimeout(function () {
                console.log('Get info for user')
            }, 1000)
        }, 2000)
    }, 3000)

}

getInfoDisplay()


// o/p-->
// user created
// Get Id for user
// Get info for user



