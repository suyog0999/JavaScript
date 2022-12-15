function renderHtml(obj)
{
    document.write(`<h2>fname:${obj.first_name}</h2>`)
    document.write(`<h2>lname:${obj.last_name}</h2>`)
    document.write(`<h3>id:${obj.id}</h3>`)
    document.write(`<h2>email:${obj.email}</h2>`)
    document.write(`<img src = ${obj.avatar}>`)
}

function getUser(page){
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then((res)=>{
        return res.json()
    }).then((newres)=>{
        let id=newres.data[3].id
        return id
    })
}

// getUser(2)


function singleuserinfo(id){
return fetch(`https://reqres.in/api/users/${id}`)
.then((res)=>{
    return res.json()
}).then((newres)=>{
   return newres.data
})
}

//singleuserinfo(8)


// getUser(2)
// .then((id)=>{
//     return singleuserinfo(id)
// }).then((info)=>{
//     // console.log(info)
//     renderHtml(info)

// })


// asyncawait

async function getPrticularIdInfo(page){
let id=await getUser(page)
let info=await singleuserinfo(id)
//console.log(info)
renderHtml(info)
}
getPrticularIdInfo(1)