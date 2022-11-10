let body=document.querySelector('body')      // showing all element present in body
console.log(body)

body.addEventListener('click',(event)=>{
    console.log(event.target)              // its showing complete element when we click on particular text
    // console.log(event.target.tagName)   //showing tagname
    // console.log(event.target.className)  // showing classname
    // console.log(event.target.id)         // showing id
    // console.log(event.target.textContent)  // showing text
})