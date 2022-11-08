// while loop
// A "While" Loop is used to repeat a specific block of code an unknown number of times, whenever a particular condition is met
// syntax

// initilizaton
// while(conditionChecked)
// {
//     statement

//     increment/decrement
// }   
//  1 to 5 num using while loop

let i=1
while(i<=5)
{
    console.log(i)
    i++
}
// o/p
// 1
// 2
// 3
// 4
// 5

let i1=10
while(i1>=1)
{
    console.log(i1)
    i1--
}
// o/p
// 10
// 9 
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1



console.log("*******************************************************")





// break statement


let k=0
while(k<=5)
{
    if(k==3)
    {
        break
    }
    console.log(k)
    k++

}
// o/p
// 0
// 1
// 2

let k1=0
while(k1<=5)
{
    console.log(k1)
    if(k1==3 )
    {
        break
    }
    k1++
}
// o/p
// 0
// 1
// 2
// 3

console.log('***********************************************')



// continue statement

let j=10
while(j<=15)
{
    if(j==12 )
    {
        j++
        continue
        
    }
    console.log(j)
    j++
}
// o/p
// 10
// 11
// 13
// 14
// 15


let j1=10
while(j1<=15)
{
    if(j1==12 || j1==13)
    {
        j1++
        continue
        
    }
    console.log(j1)
    j1++
}
// o/p
// 10
// 11
// 14
// 15