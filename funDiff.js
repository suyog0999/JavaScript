// Difference between arraow function and function expression

// function declartion
function add() {
    console.log('hello')
}

// function expression
let a = function () {
    console.log('Welcome')
}


// arrow function
let b = () => {
    console.log('hii')
}


let x = 20  //  local veriable
// on js terminal
console.log(x) // 20

// on window
//console.log(window.x)   //  undefined

console.log("***************************************************")


var y=30 //  global vriable
// on js terminal
console.log(y) //30

// on window
//console.log(window.y)  //30



console.log("******************************************************")

//Program 1 (function declaration with function expression using let keyword)

let info = {
    firstName: "Suyog",
    lastName: "Rahane",
    age: 23,
    display: function () {
        console.log(this == info)
        console.log(this.firstName + this.lastName)   // SuyogRahane

        let greet = function () {
            //console.log(this == window)  --> accept globally value
            console.log(this.firstName + this.lastName)  //  undefined+undefined=NaN --> coz let is local variable
        }
           
        greet()
    }
}
//console.log(info.display)  //  print function

info.display() 

console.log("***********************************************************************")


//Program 2 (function declaration with function expression using var and let keyword)
var firstName="Vishal"
var lastName="Malve"
let info1 = {
    firstName: "Sagar",
    lastName: "Kharde",
    age: 23,
    display: function () {
        console.log(this == info1)  // true
        console.log(this.firstName + this.lastName) //SagarKharde

        let greet = function () {
            //console.log(this == window)
            console.log(this.firstName + this.lastName) //VishalMalve
        }
        greet()
    }
}

info1.display() 



console.log("******************************************************************")



//  Program 3(function declaration with arrow function  using let keyword)
let person = {
    firstName: "Rohit",
    lastName: "Mhaske",
    info: function () {
        //this==person
        console.log(this.firstName + this.lastName) //RohitMhaske

        let display = () => {
        //parent's this scope
            console.log(this.firstName + this.lastName)
        }
        display() //RohitMhaske
    }

}
person.info()



console.log("**********************************************************")



//Program 4( arrow function with arrow function  using let keyword)

let person1 = {
    firstName: "Rahul",
    lastName: "Rahane",
    info: () => {
        //this==window (parent scope--> parent scope)
        console.log(this.firstName + this.lastName) //NaN

        let display = () => {
            //parent's this scope
            //this==window
            console.log(this.firstName + this.lastName)//NaN
        }
        display()
    }

}
person1.info()

console.log("**************************************************")

// program 5( arrow function with arrow function  using var keyword) access globally only

var firstName="sham"
var lastName="kumar"
let person2 = {
    firstName: "Rahul",
    lastName: "Rahane",
    info: () => {
        //this==window
        console.log(this.firstName + this.lastName) //shamkumar

        let display = () => {
            //parent's this scope
            //this==window
            console.log(this.firstName + this.lastName) //shamkumar o/p display on window
        }
        display()
    }

}
person2.info()