
document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').style.color = "red";  
})




//<p id = "sss" class = "frinds" name ="yog">we are friends</p>


// css selector

// // By tagName
// let byTagName = document.querySelector('p')
// console.log(byTagName)
// // id 
// let byId = document.querySelector('#sss')
// console.log(byId)
// // class
// let byClass = document.querySelector('.friends')
// console.log(byClass)
// // common formula
// // tagName[attribute = "value"]
// let byCommFormula = document.querySelector('p[name="yog"]')
// console.log(byCommFormula)

let byTagName = document.querySelector('p')
let byId = document.querySelector('#sss')
let byClass = document.querySelector('.friends')
let byAttribute = document.querySelector('p[name = "yog"]')

console.log(byTagName)
console.log(byId)
console.log(byClass)
console.log(byAttribute)