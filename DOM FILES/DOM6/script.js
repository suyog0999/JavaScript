// retrive 
{/*
<p class="bbb">I am student</p>
<p class="bbb">I am student of MCA</p>
<p class="bbb">I am from Sangamner</p>
<p id="city">Sangamner is beautiful city</p>
<p name="three">I love my city</p> */}


// let tagName = document.querySelector('p')
// let id = document.querySelector('#city')
// let classN = document.querySelector('.bbb')
// let name = document.querySelector('p[name="three"]')


let id = document.getElementById('city')
console.log(id)  // <p id="city">Sangamner is beautiful city</p>

let nodeList = document.querySelectorAll('p')
console.log(nodeList.length) // 5

let htmlCollection = document.getElementsByTagName('p')
console.log(htmlCollection.length)   // 5



//  at the run time when we delete html element the querySelectorAll(NodeList) length is not updated

let classOne = document.querySelectorAll('.bbb') // showing nodeList  NodeList(3)  [p.bbb, p.bbb, p.bbb]
console.log(classOne)

console.log(classOne.length)//3


//  at the run time when we delete html element the getElementsByClassName(htmlCollection) length is  updated

let classTwo = document.getElementsByClassName('bbb')  // showing htmlCollection   HTMLCollection(3) [p.bbb, p.bbb, p.bbb]
console.log(classTwo)
console.log(classTwo.length)  //3

//document.querySelectorAll('.bbb') --> NodeList()
//document.getElementById('city')  -->  single element
//document.getElementsByTagName('p') --> htmlCollection()
//document.getElementsByClassName('bbb') --> htmlCollection()





//----------------------- Attribute -----------------------
let pElement = document.querySelector('.aaa')
console.log(pElement)                 //  <h1 class="aaa">Suyog</h1>


console.log(pElement.className)    // aaa

pElement.className = "six"         // six --> className is updated here
console.log(pElement.className) 

pElement.classList.add('five')
pElement.classList.add('seven')
console.log(pElement.className)   // six five seven --> add className five and seven

pElement.classList.remove('six')
console.log(pElement.className)   // five seven --> remove className six



// toggle works like electric swicth 
pElement.classList.toggle('five')  // toggle works like electric swicth 
console.log(pElement.className)    // seven  --> remove the className five
pElement.classList.toggle('five')
console.log(pElement.className)    // five seven --> add className five

pElement.classList.toggle('six')
console.log(pElement.className)     // seven five six  