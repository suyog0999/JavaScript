// 1.for loop  
// A for loop repeats until a specified condition evaluates to false.
//syntax------
// for(initillization; conditionCheck; increment/decrement)
//                {
//                     statement
//                }
// EX--if we print 5 numbers using for loop


for( let i=0;i<5;i++)
{
    console.log(i)
}

//o/p->0
//     1
//     2
//     3
//     4




console.log('---------------------------------------------------------------')



//ex---if we print reverse 5 numbers

for(i=5;i>=1;i--)
{
    console.log(i)
}
//o/p->
//     5
//     4
//     3
//     2
//     1


console.log('---------------------------------------------------------------')




//             0        1       2       3        4         5
let fruits=['banana','cherry','mango','apple','grapes','stawbeery']
console.log(fruits.length)                               //o/p-> 6
for(let i=0;i<fruits.length-1;i++)
{
    console.log(i)                                      //o/p->   0 1 2 3 4  its print index values
    console.log(fruits[i])                              //o/p->   0 banana
}                                                       //        1 cherry
//                                                                2 mango
//                                                                3 apple
//                                                                4 grapes



console.log('---------------------------------------------------------------')


//  revrse array using for loop
//             0           1         2         3       4
let sports=['football','cricket','kho-kho','kabaddi','golf']
console.log(sports.length)                                  //o/p->  5
for(let i=sports.length-1;i>=0;i--)
{
    console.log(i)
    console.log(sports[i])
}
//o/p->    
//  4
//  golf
//  3
//  kabaddi
//  2
//  kho-kho
//  1
//  cricket
//  0
//  football




