let body=document.querySelector('body')      // showing all element present in body
console.log(body)

body.addEventListener('click',(event)=>{
    console.log(event.target)           // its showing complete element when we click on particular text
    //or console.log(event.target.tagName) 
    //or console.log(event.target.className)  
})