function Animal( name,color)
{
    this.name=name
    this.color=color
}
let tiger= new Animal('Tiger','Yellow')


Animal.prototype.display= function(){
    console.log(this.name+this.color)
}

Animal.prototype.leg=4
console.log(tiger.leg)
tiger.display()