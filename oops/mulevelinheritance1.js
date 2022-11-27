// MULTILEVEL INHERITANCE
class Grandfather{
    constructor(gfn,ln)
    {
        this.firstName=gfn
        this.lastName=ln
    }
    displayGrandfatherName(){
        console.log(` ${this.firstName} ${this.lastName} `)
    }
}

class Father extends Grandfather{
    constructor(gfn,ln,ffn){
        super (gfn,ln)
        this.ffirstName=ffn
    }
    displayFatherName(){
        console.log(` ${this.ffirstName} ${this.lastName} `)
        super.displayGrandfatherName()
    }
}

class Son extends Father{
    constructor(gfn,ln,ffn,sfn){
        super(gfn,ln,ffn)
        this.sfirstName=sfn
    }
    displayAllName(){
        console.log(` ${this.sfirstName} ${this.lastName} `)
        super.displayFatherName()
    }
}
let suyog=new Son('Vithoba','Rahane','Bhausaheb','Suyog')
console.log(suyog)

// o/p-->
// Son {
//     firstName: 'Vithoba',
//     lastName: 'Rahane',
//     ffirstName: 'Bhausaheb',
//     sfirstName: 'Suyog'
//   }

suyog.displayAllName()
// o/p-->
// Suyog Rahane 
// Bhausaheb Rahane
// Vithoba Rahane