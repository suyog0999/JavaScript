let button = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulElemnent = document.querySelector('ul')

button.addEventListener('click', () => {
    let text = inputText.value
    newLi = document.createElement('li')   //<li>--</li>
    newLi.textContent = text               //<li>newLi</li>
    CreateButton(newLi)
    ulElemnent.appendChild(newLi)
    inputText.value = ''
})



ulElemnent.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        if (event.target.className === "remove") {           // to remove element
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }



         if (event.target.className === "up") {        // to up element
            let li = event.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            if (prev) {
                ul.insertBefore(li, prev)
            }




        }
         if (event.target.className === "down") {       // to down element
            let li = event.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling
            if (next) {
                ul.insertBefore(next, li)
            }




        }
    }
})




function CreateButton(li) {
    let remove = document.createElement('button')   //<button>--</button>
    remove.textContent = 'Remove'                 //<button>Remove</button>
    remove.className = 'remove'
    li.appendChild(remove)

    let up = document.createElement('button')   //<button>--</button>
    up.textContent = 'Up'                 //<button>Up</button>
    up.className = 'up'
    li.appendChild(up)

    let down = document.createElement('button')   //<button>--</button>
    down.textContent = 'Down'                 //<button>Down</button>
    down.className = 'down'                     //<button class=down>Down</button>
    li.appendChild(down)



}