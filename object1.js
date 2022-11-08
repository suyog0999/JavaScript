let student = 
{
    firstname: 'suyog',
    lastname: 'Rahane',
    skills: ['java', 'js', 'html', 'c'],
    family: 
    {
        father: 'Bhausaheb',
        mother: 'Sunita'
    }
}
//  retrive
console.log(student.family)

// o/p--> 
// family:
// {
//     father: 'Bhausaheb',
//     mother: 'Sunita',
// }

console.log(student.family.mother) 

// o/p--> Sunita




student['family']['sister'] = 'Priyanka'
console.log(student)

// o/p-->   family: { father: 'Bhausaheb', mother: 'Sunita', sister: 'Priyanka' }


// let a=student.firstname.toUpperCase()
// console.log(a)

// student.firstname=a
// console.log(student)

//o/p-->
// {
//     firstname: 'SUYOG',
//     lastname: 'Rahane',
//     skills: [ 'java', 'js', 'html', 'c' ],
//     family: { father: 'Bhausaheb', mother: 'Sunita', sister: 'Priyanka' }
//   }





student.skills.push('MySql')
console.log(student.skills)

// o/p-->  [ 'java', 'js', 'html', 'c', 'MySql' ]



// updated student object
console.log(student)

// {
//     firstName: 'Suyog',
//     lastname: 'Rahane',
//     skills: [ 'java', 'js', 'html', 'c', 'MySql' ],
//     family: { father: 'Bhausaheb', mother: 'Sunita', sister: 'Priyanka' }
//   }