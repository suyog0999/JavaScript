// SINGLE INHERITANCE
class Animal {
    constructor(type, color) {
        this.type = type
        this.color = color
    }
    displayType() {
        console.log(this.type)
    }

}

class Mammals extends Animal {
    constructor(type, color, name) {
        super(type, color)
        this.name=name
    }
    displayAllINfo(){
        console.log(this.name,this.color)
        super.displayType()
    }
}
let cat=new Mammals('mammal','black','Cat')
console.log(cat)

// o/p--> Mammals { type: 'mammal', color: 'black', name: 'Cat' }

cat.displayAllINfo()

// o/p--> 
// Cat black
// mammal