
//for loop on array
//             0         1       2       3       4
let names = ["suyog","amol","piyush","ram","mayur"]
for(let i = 0 ; i < names.length ; i++)
{ 
    console.log(i)              //o/p--> 0 1 2 3 4
    console.log(names[i])       //o/p--> suyog amol piyush ram mayur
}

for(let i = names.length -1 ; i >= 0 ; i--)
{ 
    console.log(i)              //o/p--> 4 3 2 1 0
    console.log(names[i])       //o/p--> mayur ram piyush amol suyog
}


console.log('*************************************************************')


//for loop on string
//  0 1 2 3
//  p u n e
let city = "pune"
for(let j = 0 ; j < city.length ; j++)
{
    console.log(j)              //o/p--> 0 1 2 3
    console.log(city[j])        //o/p--> p u n e
}

for(let i = city.length -1 ; i >= 0 ; i--)
{
    console.log(i)              //o/p--> 3 2 1 0
    console.log(city[i])        //o/p--> e n u p
}
// o/p-->
// 3
// e
// 2
// n
// 1
// u
// 0
// p
