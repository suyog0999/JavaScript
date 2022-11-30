// lexical scope --> parent function variable are accesible in their child function
// ex
function add() {
    let a = 22
    let b = 32
    console.log(a + b) // 54
    function add1() {
        let c = 42
        let d = 52
        console.log(c + d) // 94
        console.log(a + b + c + d)  // 148
        function add2() {
            let e = 62
            let f = 72
            console.log(e + f)  // 134
            console.log(c + d + e + f)  // 228
            console.log(a + b + c + d + e + f)  // 282
        }
        add2()
    }
    add1()
}
add()

console.log("**********************************************************************************")

// global access
// ex
let p = 20
let q = 10
function sub() {
    let s = 40
    let r = 30
    console.log(s - r)  // 10
    console.log(p - q)  // 10
    function sub1() {
        let p = 9
        let q = 5
        let n = 4
        let g = 3
        console.log(s - r - n - g) // 3
        console.log(s - r - p - q) // -4
    }
    sub1()
}
sub()

console.log("*******************************************************************")

// closure

function mul(){
    let g=5
    let h=5
    console.log("hiiiiiiiiiiiiiiiiiii")
    return function(){
        console.log(g*h)
        console.log("multiplication")
    }
}
let a=mul()
console.log(a) // hiiiiiiiiiiiiiiiiiii
               // [Function (anonymous)]
a()
// 25
// multiplication