// api trigger using specific page and id

function getUserPageWise(page) {
   return fetch(`https://reqres.in/api/users?page=${page}`)
        .then(function (res) {
            //console.log(res)  --> not in readabale form
            return res.json()
        })
        .then(function (properRes) {
            //console.log(properRes)
            return (properRes)
        })
}
//getUserPageWise(2)

function getUserId(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then((res)=>{
        //console.log(res)  --> not in readabale form
            return res.json()
    })
    .then((newres)=>{
        //console.log(newres)
        return (newres)
    })
}
//getUserId(10)

getUserPageWise(2)
.then((res)=>{
    let id=res.data[2].id
    //console.log(id)  --> we get id which is present at index of 2
    return getUserId(id)
}).then((newres)=>{
    console.log(newres.data) //--> we get all data of particulr id which is present at index of 2
   let a= newres.data
   createHtml(a)
})

// rendorhtml or create html --> to showing text on browser
function createHtml(res) {
    document.write(`<img src=${res.avatar}>`)
    document.write(`<h3>FirstName:${res.first_name}</h3>`)
    document.write(`<h3>LastName:${res.last_name}</h3>`)
    document.write(`<h3>Email:${res.email}</h3>`)
}

