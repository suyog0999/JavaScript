//<h1>SUBJECTS</h1>
//<button>CLICK</button>


let heading=document.querySelector('h1')
console.log(heading)                // o/p--> <h1>SUBJECTS</h1>
console.log(heading.textContent)    // o/p--> SUBJECTS


let button=document.querySelector('button')
console.log(button)                 // o/p--> <button>CLICK</button>
console.log(button.textContent)  //o/p --> CLICK


button.addEventListener('click',()=>{ 
    heading.textContent="All Subjects"    //(update the html elment text when we the button is clicked)
    heading.style.color="orange"
    heading.style.backgroundColor="black"
    heading.style.width='170px'
})