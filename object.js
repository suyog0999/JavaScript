// object
// object does not stored value by index
// object stored value in key:value pair
// object is more descriptive than array

// ex


let PersonalInfo =
{                                     // key :  'value'  // keys=> property
    name: 'Suyog',                    // name:  'Suyog',
    surname: 'Rahane',
    age: 22,
    city: 'sangamner'
}
console.log(PersonalInfo)

//o/p-->  { name: 'Suyog', surname: 'Rahane', age: 22, city: 'sangamner' }

// CRUD operation--> we can perform on object
// c--> create(add)
// r--> retrive
// u--> update
// d--> delete

// 1.Retrive--> we can retrive object by using 'dot notation . ' and 'bracket notation [] '

// a . dot notation
console.log(PersonalInfo.name)
//o/p--> Suyog

// b [] bracket notation
console.log(PersonalInfo['surname'])
//o/p--> Rahane



console.log('*******************************************************')




// 2. Add(create)--> we can add or create new keys in existing object using dot and bracket notation

// a . dot notation
PersonalInfo.dist = 'Ahemadnagar'
console.log(PersonalInfo)

// o/p
// {
//     name: 'Suyog',
//     surname: 'Rahane',
//     age: 22,
//     city: 'sangamner',
//     dist: 'Ahemadnagar'
//   }

// b [] bracket notation
PersonalInfo['mobNo'] = '1234567890'
console.log(PersonalInfo)

// o/p
// {
//     name: 'Suyog',
//     surname: 'Rahane',
//     age: 22,
//     city: 'sangamner',
//     dist: 'Ahemadnagar',
//     mobNo: '1234567890'
//   }


console.log('******************************************************************')

// 3. update--> update key value using dot and bracket notation

// a . dot notation
PersonalInfo.name = 'Om'
console.log(PersonalInfo)

// o/p
// {
//     name: 'Om',
//     surname: 'Rahane',
//     age: 22,
//     city: 'sangamner',
//     dist: 'Ahemadnagar',
//     mobNo: '1234567890'
//   }


// b [] bracket notation
PersonalInfo['age'] = 20
console.log(PersonalInfo)

// o/p
// {
//     name: 'Om',
//     surname: 'Rahane',             
//     age: 20,
//     city: 'sangamner',
//     dist: 'Ahemadnagar',
//     mobNo: '1234567890'
//   }

console.log('**********************************************************************')

// 4. delete--> delete key value using dot and bracket notation
// a . dot notation
delete PersonalInfo.dist 
console.log(PersonalInfo)

// o/p
// {
//     name: 'Suyog',
//     surname: 'Rahane',
//     age: 22,
//     city: 'sangamner'
//   }

// b [] bracket notation
delete PersonalInfo['mobNo']
console.log(PersonalInfo)

// o/p--> { name: 'Om', surname: 'Rahane', age: 20, city: 'sangamner' }

console.log('*******************************************************************')



// to retrive all keys from an object
for(let key in PersonalInfo)
{
    console.log(key)
}

// o/p
// name
// surname
// age
// city 



// to define key value only

for(let key in PersonalInfo)
{
    console.log(PersonalInfo[key])
}

// o/p
// Om
// Rahane
// 20
// sangamner

// to define key and key value

for(let key in PersonalInfo)
{
    console.log(key,PersonalInfo[key])
}

// o/p
// name Om
// surname Rahane
// age 20
// city sangamner

