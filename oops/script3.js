// Inheritance without using constructor

class Student {
    fullName = "suyog rahane"
    idNo = 1234

    displayName(){
        console.log(this.fullName)
    }
}
// let suyog=new Student()
// console.log (suyog)

// o/p--> Student { fullName: 'suyog rahane', idNo: 1234 }

class Teacher extends Student {
    
    salary = 50000

}
// let suyog = new Teacher()
// console.log(suyog)

// o/p--> Teacher { fullName: 'suyog rahane', idNo: 1234, salary: 50000 }

class Professor extends Teacher {
    specialization = "math"
}


let suyog = new Professor()
console.log(suyog)
// o/p-->
// Professor {
//     fullName: 'suyog rahane',
//     idNo: 1234,
//     salary: 10000,
//     specialization: 'english'
//   }
// property 
console.log(suyog.specialization) //o/p--> math
console.log(suyog.salary)         // o/p--> 50000
console.log(suyog.fullName)       // o/p--> suyog rahane
console.log(suyog.idNo)           // o/p--> 1234

// method  //Calling parent's method
suyog.displayName()  // suyog rahane






// parent has constructor and child has no constructor

class Employee {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName , this.lastName)
    }
}

class Senior extends Employee {
    salary = 100000
}

let sagar = new Senior("sagar","kharde")
console.log(sagar)
// o/p--> Senior { firstName: 'sagar', lastName: 'kharde', salary: 100000 }


console.log(sagar.firstName)  // sagar
console.log(sagar.lastName)   // kharde
console.log(sagar.salary)     // 100000
sagar.displayName()           // sagar kharde

let ram = new Employee("ram","sharma")
console.log(ram.firstName)  // ram
console.log (ram.lastName)  // sharma

ram.displayName()  // ram sharma



// parent is having constructor and child also has constructor

class Student1 {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName , this.lastName)
    }
}

class Teacher1 extends Student1 {
    constructor(fn,ln,sal){
        super(fn,ln)
        this.salary = sal
    }

}

 let suyog1 = new Teacher1("sham","rahane",55550)
 console.log(suyog1)

 // o/p--> Teacher1 { firstName: 'sham', lastName: 'rahane', salary: 55550 }