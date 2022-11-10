let button=document.querySelector('#one')
let inputText=document.querySelector('input')
let ulElemnent=document.querySelector('ul')

button.addEventListener('click',()=>{
    let text=inputText.value
    newLi=document.createElement('li')   //<li>--</li>
    newLi.textContent=text               //<li>newLi</li>
    CreateButton(newLi)
    ulElemnent.appendChild(newLi)    
    inputText.value=''     
})



 ulElemnent.addEventListener('click',(event)=>{
    if(event.target.tagName==="BUTTON"){
        if(event.target.className==="remove"){           // to remove element
            let li=event.target.parentElement
            let ul=li.parentElement
            ul.removeChild(li)
        }
        else if(event.target.className==="up"){




        }
        else if(event.target.className==="down"){




        }
    }
 })




function CreateButton(li){
    let remove=document.createElement('button')   //<button>--</button>
    remove.textContent= 'Remove'                 //<button>Remove</button>
    remove.className='remove'
    li.appendChild(remove)

    let up=document.createElement('button')   //<button>--</button>
    up.textContent= 'Up'                 //<button>Up</button>
    up.className='up'
    li.appendChild(up)

    let down=document.createElement('button')   //<button>--</button>
    down.textContent= 'Down'                 //<button>Down</button>
    down.className='down'
    li.appendChild(down)



}