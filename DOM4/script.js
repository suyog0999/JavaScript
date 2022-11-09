let heading=document.querySelector('h1')
let button=document.querySelector('button')
let inputText=document.querySelector('input')
let ulList=document.querySelector('ul')


button.addEventListener('click',()=>{
    let text=inputText.value
    let newElement=document.createElement('li')     //<li>-----</li>
    newElement.textContent=text
    ulList.appendChild(newElement)
    inputText.value=''
})