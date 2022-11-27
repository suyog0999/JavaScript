// HIERARCHICAL INHERITANCE

class Father {
    constructor(ffname, lname) {
        this.ffname = ffname
        this.lname = lname
    }
    displayFAtherName() {
        console.log(this.ffname, this.lname)
    }
}

class Son extends Father {
    constructor(ffname, lname, sfname) {
        super(ffname, lname)
        this.sfname = sfname
    }
    displaySFullName() {
        console.log(this.sfname) ,super.displayFAtherName()
        
    }
}

let suyog=new Son('BHausaheb','Rahane','Suyog')
console.log(suyog)  // Son { ffname: 'BHausaheb', lname: 'Rahane', sfname: 'Suyog' }

suyog.displaySFullName()
// Suyog
// BHausaheb Rahane


class Daughter extends Father{
    constructor(ffname,lname,dfname){
        super(ffname,lname)
        this.dfname=dfname
    }
    displayDFullName(){
        console.log(this.dfname)
        super.displayFAtherName()
    }
}

let priyanka=new Daughter('Bhusaheb','Rahane','Priyanka')
console.log(priyanka)   //Daughter { ffname: 'Bhusaheb', lname: 'Rahane', dfname: 'Priyanka' }

priyanka.displayDFullName()
// Priyanka
// Bhusaheb Rahane
