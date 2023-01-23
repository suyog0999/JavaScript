// API WITH Promise.all(using try catch block)

function getUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            if (res.ok) {
                return res.json().then(function (res) {
                    return res.data
                })
            }
            else {
                return new Error('user not found')
            }
        })

}
async function getUsers(id, id2, id3) {
    try {
        let data = await Promise.all([
            getUser(id),
            getUser(id2),
            getUser(id3)
        ])
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }

}
getUsers(1, 2, 344)

// o/p-->
// (3) [{…}, {…}, Error: user not found
//     at file:///C:/Users/technOrbit/Desktop/JavaScript/ajax/apipromiseall1.js:…]
// 0
// : 
// {id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg'}
// 1
// : 
// {id: 2, email: 'janet.weaver@reqres.in', first_name: 'Janet', last_name: 'Weaver', avatar: 'https://reqres.in/img/faces/2-image.jpg'}
// 2
// : 
// Error: user not found at file:///C:/Users/technOrbit/Desktop/JavaScript/ajax/apipromiseall1.js:10:24 at async Promise.all (index 2) at async getUsers (file:///C:/Users/technOrbit/Desktop/JavaScript/ajax/apipromiseall1.js:17:20)
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0