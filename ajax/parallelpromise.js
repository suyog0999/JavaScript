// API call one  --- 3 seconds
// API call two  ---6 seconds 
// API call three --- 9 seconds

// sync
//async


// API to get single user info


function getUserInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
       // console.log(res.data)
        return res.data
    })
}

// async await
async function getUserInfos(id,id2,id3){
    let a = await getUserInfo(id) //2
    let b = await getUserInfo(id2)//4
    let c = await getUserInfo(id3)//6
    console.log(a,b,c)
}

getUserInfos(1,2,3)  //--> print all o/p at a time
// o/p
// {id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg'} 
// {id: 2, email: 'janet.weaver@reqres.in', first_name: 'Janet', last_name: 'Weaver', avatar: 'https://reqres.in/img/faces/2-image.jpg'} 
// {id: 3, email: 'emma.wong@reqres.in', first_name: 'Emma', last_name: 'Wong', avatar: 'https://reqres.in/img/faces/3-image.jpg'}


console.log("****************************************************************************************************************************")


// async await with promise
// async function getUsersInfo(id,id2,id3){
//     let info = await Promise.all([
//         getUserInfo(id),
//         getUserInfo(id2),
//         getUserInfo(id3)
//     ])
//     console.log(info)
// }
// getUsersInfo(1,2,3)  --> print all o/p at a time


// Promise.all()
async function getUserss(){
   let data = await Promise.all([
        Promise.resolve('pass'),
        Promise.resolve('fail'),
        Promise.resolve('pass1'),
   ])
   console.log(data)
}
// getUserss()
