/* <p class="sub" id="uniqe" name="best">MY FAVORITE SUBJECTS</p> */


let byTagName=document.querySelector('p')
console.log(byTagName)                      // o/p--> <p class="sub" id="uniqe" name="best">MY FAVORITE SUBJECTS</p>

let byClass=document.querySelector('.sub')
console.log(byClass)                        // o/p--> <p class="sub" id="uniqe" name="best">MY FAVORITE SUBJECTS</p>

let byId=document.querySelector('#uniqe')
console.log(byId)                           // o/p--> <p class="sub" id="uniqe" name="best">MY FAVORITE SUBJECTS</p>

let byCommFormula=document.querySelector('p[name="best"]')
console.log(byCommFormula)                  // o/p--> <p class="sub" id="uniqe" name="best">MY FAVORITE SUBJECTS</p>





// perform action on html element text using textContent()

console.log(byCommFormula.textContent)  // o/p(on browser)--> MY FAVORITE SUBJECTS


byCommFormula.addEventListener('click',()=>{
    byCommFormula.textContent='I LIKE ALL THIS SUBJECTS'  //(update the particular text)
    byCommFormula.style.color = "red"
})