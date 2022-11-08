// array inside object with custom name
let employee =
{
    fullName: "suyog rahane",
    roll: 'manager',
    skills: ['java', 'devops', 'nodeJS']
}

let { fullName: fn, roll: r, skills: [s1, s2, s3] } = employee
console.log(s2)  //o/p--> devops
console.log(r)   //o/p--> manager

//array in object without custom name

let student =
{
    name: 'suyog',
    surname: 'rahane',
    rollno: 34,
    hobbies: ['playing', 'swimming', 'singing']

}

let { name, surname, rollno, hobbies: [a1, a2, a3] } = student
console.log(name)   //o/p-->suyog
console.log(a3)     //o/p-->singing


console.log("***********************************************************")



// object in array with custom name
let student1 = [
    {
        firstName: 'mahesh',
        lastName: 'aher'
    },
    {
        firstName: 'sagar',
        lastName: 'navale',
        rollNumber: 32
    }
]
let [{ firstName: f1, lastName: l1 }, { firstName: f2, lastName: l2, rollNumber }] = student1
console.log(l2)     //o/p--> navale


// object and array in object with custom name

let person = {
    firstName: 'shubham',
    family: {
        father: 'Mahesh',
        mother: 'shubhangi',
        sister: [
            {
                name1: 'rohini',
                age: 12
            },
            {
                name1: 'kaveri',
                age: 32
            },
            {
                name1: 'shilpa',
                age: 20,
                skills: ['selenium', 'python']
            }
        ]
    }
}
let { firstName: f, family: { father: fa, mother: mo, sister: [{ name1: na, age: aa, }, { name1: n, age: bb }, { name1: nn, age: cc, skills: [p1, p2] }] } } = person
console.log(p1)  //o/p--> selenium
