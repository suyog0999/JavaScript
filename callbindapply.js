let suyog = {
    firstName: "Suyog",
    lastName: "Rahane",
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}
// suyog.displayName()  o/p--> SuyogRahane


let sagar = {
    firstName: 'Sagar',
    lastName: 'Kharde'
}
// let a1=suyog.displayName
// // a1 =function(){
// //      console.log(this.firstName+this.lastName)
// a1()  // NaN

// bind

let a1 = suyog.displayName.bind(sagar)
a1()  // o/p--> SagarKharde


console.log("*********************************************************")



// call

suyog.displayName.call(sagar) // o/p--> SagarKharde




console.log("*********************************************************")



// apply

suyog.displayName.apply(sagar) // o/p--> SagarKharde




// ===================================================================================================

// let personA={
//     firstName:'Rajan',
//     lastName:'Sharma'
// }
// let personB={
//     firstName:'Rahul',
//     lastName:'Roy'
// }
// let personC={
//     firstName:'Ramesh',
//     lastName:'Dev'
// }

// let displayFullName=function(){
// console.log(this.firstName+" "+this.lastName)
// }


// // bind

// let p=displayFullName.bind(personA)
// p()  // o/p-->  Rajan Sharma


// // call

// displayFullName.call(personB)  // o/p--> Rahul Roy


// // apply

// displayFullName.apply(personC)  // o/p--> Ramesh Dev



//======================================================================================


let personA = {
    firstName: 'Rajan',
    lastName: 'Sharma'
}
let personB = {
    firstName: 'Rahul',
    lastName: 'Roy'
}
let personC = {
    firstName: 'Ramesh',
    lastName: 'Dev'
}

let displayFullName = function (greet1, greet2) {
    console.log(greet1, this.firstName + " " + this.lastName, greet2)
}


// bind

let p = displayFullName.bind(personA,"Good Morning","Have A Nice Day")
p()  // o/p-->  Good Morning Rajan Sharma Have A Nice Day


// call

displayFullName.call(personB,"Good Night","Sweet Dreams")  
// o/p--> Good Night Rahul Roy Sweet Dreams


// apply

displayFullName.apply(personC,['Hi',"How R U"]) 
 // o/p--> Hi Ramesh Dev How R U