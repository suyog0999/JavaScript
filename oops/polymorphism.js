// POLYMORPHISM --> PERFORM SINGLE ACTION IN DIFFERENT WAYS
// 1. Overloading --> SAME CLASS       SAME METHODS   DIFFERENT SIGNATURES  
// 2. Overriding  --> DIFFERENT CLASSES  SAME METHODS   SAME SIGNATURES


// 1. Overloading --> it is not possible in javascript but we can achived it by using coditional statements

// Ex
// class Calculator {
//     addition(x, y) {
//         console.log(x + y)
//     }

//     addition(x, y, z) {
//         console.log(x + y + z)
//     }
//     addition(x, y, z, q) {
//         console.log(z)
//         console.log(q)
//         console.log(x + y + z + q)
//     }
// }
// let a = new Calculator()
// a.addition(12, 45)  o/p--> NaN


class Calculator {
    addition(a, b, c, d) {
        if (a != undefined && b != undefined && c != undefined && d != undefined){
            console.log(a+b+c+d)
        }
        else if (a != undefined && b != undefined && c != undefined ){
            console.log(a+b+c)
        }
        else if (a != undefined && b != undefined ){
            console.log(a+b)
        }
    }
}
let sum=new Calculator()
sum.addition (22,23)   //45
sum.addition (22,23,33)  // 78
sum.addition (22,23,33,44) // 122



console.log("******************************************************************************")




// 2. Overriding

class WorldBank{
    loan(){
        console.log( 'I am Loan From WorldBank')
    }
    save(){
        console.log('I am Save From WorldBank')
    }
}

class Canara extends WorldBank{
    loan(){
        console.log( 'I am Loan From Canara')
    }
    save(){
        console.log('I am Save From Canara')
    }
    branchName(){
        console.log('Canara Branch First')
    }
}

let canara=new Canara()
canara.loan()  // I am Loan From Canara
canara.save()  //I am Save From Canara
canara.branchName()  // Canara Branch First
