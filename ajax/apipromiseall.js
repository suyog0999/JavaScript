 function getUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then((res)=>{
        return res.json()
    })
    .then((newres)=>{
        let b=newres.data
        createHtml(b)
        return b
    })
 }


 async function getAllUser(id,id1,id2){
    let a=await Promise.all([
        getUser(id),
        getUser(id1),
        getUser(id2)
    ])
    console.log(a)
 }
 getAllUser(1,2,3)


 function createHtml(res) {
    document.write(`<img src=${res.avatar}>`)
    document.write(`<h3>FirstName:${res.first_name}</h3>`)
    document.write(`<h3>LastName:${res.last_name}</h3>`)
    document.write(`<h3>Email:${res.email}</h3>`)
}


// o/p-->
// (3) [{…}, {…}, {…}]
// 0
// : 
// {id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg'}
// 1
// : 
// {id: 2, email: 'janet.weaver@reqres.in', first_name: 'Janet', last_name: 'Weaver', avatar: 'https://reqres.in/img/faces/2-image.jpg'}
// 2
// : 
// {id: 3, email: 'emma.wong@reqres.in', first_name: 'Emma', last_name: 'Wong', avatar: 'https://reqres.in/img/faces/3-image.jpg'}
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)