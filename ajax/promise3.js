// let userInfo = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }

// //program1=>  element showing in terminal

// // userInfo.data.forEach((el)=>{
// //     console.log(el)
// // })
 
// console.log("******************************************************************")


// // program2=> element showing on browser

// // function createHtml(singleObjInfo) {
// //     document.write(`<img src=${singleObjInfo.avatar}>`)
// //     document.write(`<h3>USerId:${singleObjInfo.id}</h3>`)
// //     document.write(`<h2>FirstName:${singleObjInfo.first_name}</h2>`)
// //     document.write(`<h2>LastName:${singleObjInfo.last_name}</h2>`)
// // }

// // userInfo.data.forEach((el)=>{
// //     createHtml(el)
// // })

// console.log("*******************************************************************")

// // program3=> element showing on browser using fetch()


function createHtml(singleObjInfo) {
    document.write(`<img src=${singleObjInfo.avatar}>`)
    document.write(`<h3>USerId:${singleObjInfo.id}</h3>`)
    document.write(`<h2>FirstName:${singleObjInfo.first_name}</h2>`)
    document.write(`<h2>LastName:${singleObjInfo.last_name}</h2>`)
}

// fetch()=> async in nature
// action => to fetch url or element

function UserInfo() {
    fetch('https://reqres.in/api/users?page=2') //promise return
        .then(function (result) {
            //console.log(result) 
            return result.json()   // not in readable form so we can use json json is also async in nature
        })
        .then(function(res){
            console.log(res.data)
            res.data.forEach(element => {
                createHtml(element)
            });
        })
}
UserInfo()