
// API WITH Promise.allSettled

function timeOut(sec) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error('late to response'))
        }, sec * 1000)

    })
}

function getUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            let a=res.data
            createHtml(a)
            return a
        })
}
async function getUserInTime(id, sec) {
    let a = await Promise.allSettled([
        getUser(id),
        timeOut(sec)
    ])
    console.log(a)
}
getUserInTime(1,2)

function createHtml(res) {
    document.write(`<h2>Id:${res.id}</h2>`)
    document.write(`<img src=${res.avatar}>`)
    document.write(`<h3>FirstName:${res.first_name}</h3>`)
    document.write(`<h3>LastName:${res.last_name}</h3>`)
    document.write(`<h3>Email:${res.email}</h3>`)
}

// o/p-->
// (2) [{…}, {…}]
// 0
// : 
// {status: 'fulfilled', value: {…}}
// 1
// : 
// {status: 'rejected', reason: Error: late to response at file:///C:/Users/technOrbit/Desktop/JavaScript/ajax/apipromiseallSet…}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)