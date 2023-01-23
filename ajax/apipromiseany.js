// API WITH Promise.any


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
            let a = res.data
            createHtml(a)
            return a
        })
}
async function getUserInTime(id,id1, sec) {
    let a = await Promise.any([
        getUser(id),
        getUser(id1),
        timeOut(sec)
    ])
    console.log(a)
}
getUserInTime(1, 2,000)


function createHtml(res) {
    document.write(`<h2>Id:${res.id}</h2>`)
    document.write(`<img src=${res.avatar}>`)
    document.write(`<h3>FirstName:${res.first_name}</h3>`)
    document.write(`<h3>LastName:${res.last_name}</h3>`)
    document.write(`<h3>Email:${res.email}</h3>`)
}


// o/p-->
// {id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg'}
