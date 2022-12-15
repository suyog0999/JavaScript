// // function Animal( name,color)
// // {
// //     this.name=name
// //     this.color=color
// // }
// // let tiger= new Animal('Tiger','Yellow')


// // Animal.prototype.display= function(){
// //     console.log(this.name+this.color)
// // }

// // Animal.prototype.leg=4
// // console.log(tiger.leg)
// // tiger.display()

let array1 = [11, 2, 44, 33, 5, 7, 34, 1]

function compare(a, b) {
    return a - b
}
let a1 = array1.sort(compare)
console.log(a1)
// o/p-->[  1,  2,  5,  7, 11, 33, 34, 44 ]

//or

// let sorted=array1.sort((a,b)=>a-b)
// console.log(sorted)
// o/p-->[  1,  2,  5,  7, 11, 33, 34, 44 ]


console.log("**********************************************")


// string reverse

// string='hello'
// function abc(string){
//    let k=''
//     for(let i=string.length-1;i>=0;i--){
//         k=k+string[i]
//     }
//     return k
// }
//  //string='hello'
// //  let a=abc(string)
// //  console.log(a)
// console.log( abc(string) )

//  // olleh

//  // or

//  // reverse of string
// let names='suyog'
// let array=names.split('')
// console.log(array)
// // o/p--> [ 's', 'u', 'y', 'o', 'g' ]

// let reversearray=array.reverse()
// console.log(reversearray)
// // o/p--> [ 'g', 'o', 'y', 'u', 's' ]

// let reversenames=reversearray.join('')
// console.log(reversenames)

// // o/p--> goyus

console.log("***********************************************")

// // Delete a duplicate numbers and find total count

var arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5]
let a = arr.filter((el, index) => {
    return arr.indexOf(el) === index
})
console.log(a)
// // o/p --> [ 55, 44, 67,  8, 65, 1,  2,  3, 34,  5 ]

// console.log (a.length)
// // o/p --> 10

// or
console.log("***********************************************")
var arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5]
let arr1 = []
for (i = 0; i < arr.length; i++) {
    if (arr1.indexOf(arr[i]) == arr.indexOf(arr1[i])) {
        arr1.push(arr[i])
    }
}
console.log(arr1)
// o/p --> [ 55, 44, 67,  8, 65, 1,  2,  3, 34,  5 ]