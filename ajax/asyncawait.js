function userInfoPage(page){
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then((res)=>{
       // console.log(res) --> its not readable formate
       return res.json()
    }).then((newres)=>{
        let id=newres.data[1].id
        // console.log(id)
        return id
    })
}
// userInfoPage(2)
 
function userInfoId(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then((res)=>{
        // console.log(res)--> its not readable formate
        return res.json()
    }).then((newres)=>{
        // console.log(newres.data)
        return newres.data
    })
}
// userInfoId(2)

function renderHtml(obj){
    document.write(`<h1>fname:${obj.first_name}</h1>`)
    document.write(`<h1>lname:${obj.last_name}</h1>`)
    document.write(`<h2>id:${obj.id}</h2>`)
    document.write(`<img src = ${obj.avatar}>`)
    document.write(`<h3>email:${obj.email}</h3>`)
}


// userInfoPage(2)
// .then((id)=>{
//     return userInfoId(id)
// }).then((res)=>{
//     console.log(res)
//     renderHtml(res)
// })




// async await
async function getUserInfo(page){
    let id=await userInfoPage(page)
    let userData=await userInfoId(id)
    //console.log(userData)
    renderHtml(userData)
}
getUserInfo(1)