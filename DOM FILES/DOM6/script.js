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
console.log(id)

let nodeList = document.querySelectorAll('p')
console.log(nodeList.length)

let htmlCollection = document.getElementsByTagName('p')
console.log(htmlCollection.length)

let classOne = document.querySelectorAll('.bbb') // showing nodeList  NodeList(3)  [p.bbb, p.bbb, p.bbb]
console.log(classOne)

let classTwo = document.getElementsByClassName('bbb')  // showing htmlCollection   HTMLCollection(3) [p.bbb, p.bbb, p.bbb]
console.log(classTwo)

//document.getElementById('city')  -  single element
//document.getElementsByTagName('p') - htmlCollection
//document.getElementsByClassName('bbb') - htmlCollection

//----------------------- Attribute -----------------------
let pElement = document.querySelector('.aaa')
console.log(pElement)                 //  <h1 class="aaa">Suyog</h1>


// console.log(pElement.className)

// pElement.className = "six"

// pElement.classList.add('five')
// pElement.classList.add('seven')
// pElement.classList.remove('six')

pElement.classList.toggle('six')
pElement.classList.toggle('six')