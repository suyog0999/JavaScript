// API
// create user
// get user info by its id
// display info

// functions 1 (async execution)

function getInfo() {

    setTimeout(function () {
        console.log('user created')
    }, 3000)

    setTimeout(function () {
        console.log('user info by id')
    }, 2000)

    setTimeout(function () {
        console.log('user info print')
    }, 1000)
}
//getInfo()
// o/p-->
// user info print
// user info by id
// user created


// function 2 (async to sync using callback hell )

function getInfo1() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('user info by id')
            setTimeout(function () {
                console.log('user info print')
            }, 1000)
        }, 2000)
    }, 3000)

}
// getInfo1()
// o/p-->
// user created
// user info by id
// user info print



// // function 3(async to sync using promises )


function createUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })
}
function getUserId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('get user by Id')
        },2000)
    })
}
function userInfo(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('get user print info')
        },1000)
    })
}


createUser()
.then(function(str){
    console.log(str)  
    return getUserId()
})
.then(function(str){
    console.log(str)
    return userInfo()
})
.then(function(str){
    console.log(str)
})

// o/p-->
// user created
// get user by Id
// get user print info