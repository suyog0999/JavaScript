let Name=document.querySelector('h1')
let inputText=document.querySelector('input')
let button=document.querySelector('button')
console.log(Name)
console.log(inputText)
console.log(button)

button.addEventListener('click',()=>{
    text=inputText.value
    Name.style.color=text
    inputText.value=''
})