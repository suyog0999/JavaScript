//5.indexOf()

//            o        1        2        3
let fruits=['mango','apple','banana','grapes']
console.log(fruits.length)                        //o/p-> 4

let a1=fruits.indexOf('apple')
console.log(a1)                //o/p->  1




//6.flat()     0       1       3
let matrix=[[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix.length)            //o/p->    3

let a2= matrix.flat()
console.log(a2)                       //o/p->  [  1, 2, 3, 4, 5,6,7,8,9]



//7.join()     0        1      2      3
let student=['suyog','sagar','amol','ajit']

console.log(student[student.length-1])      //o/p->   ajit

console.log(student.length-1)               //o/p->    3  (shows always last index)

console.log(student.length)                 //o/p->    4

let a3=student.join('*')
console.log(a3)                             //o/p->     suyog*sagar*amol*ajit




//8.includes()     
let sport=['kabaddi','badminton','football','cricket']

let a4=sport.includes("kabaddi")
console.log(a4)                                 //o/p->  true

let a5=sport.includes("kho-kho")
console.log(a5)                                 //o/p-> false


//9.reverse()
let cities=['mumbai','pune','banglore','hydrabad']

let a6=cities.reverse()
console.log(a6)                                  //o/p->   [ 'hydrabad', 'banglore', 'pune', 'mumbai' ]



//10.concat()-----------combine two array
let numbers1=[11,22,33,44,55]
let numbers2=[66,77,88,99,00]
let a7=numbers1.concat(numbers2)
console.log(a7)                   //o/p->    [11,22,33,44,55,66,77,88,99,00


//11.sort----- sorting array by alphabetically
let films=['dabbang','kgf','pushpa','rrr','golmaal']
let a8=films.sort()
console.log(a8)                                     //o/p->    [ 'dabbang', 'golmaal', 'kgf', 'pushpa', 'rrr' ]









