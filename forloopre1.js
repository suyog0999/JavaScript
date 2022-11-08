// loops 
// for loop and while loop




// 1.for loop
//syntax:
// for(initialization ; conditionCheck ; increment/decrement){
//     // statment
// }


for(let i = 0 ; i < 5 ; i++)
{ 
    console.log("hello")
   
}
//o/p--->  
    // "hello"
    // "hello"
    // "hello"
    // "hello"
    // "hello"



    
// print 1 to 5
for(let i = 1 ; i <= 5 ; i++)
{
    console.log(i) 
}
//o/p--->
//       1
//       2
//       3
//       4
//       5


console.log('*********************************************')

// print 5 to 1
for(let i = 5 ; i >= 1 ; i--)
{ 
    console.log(i) 
}
//o/p--->
//        5
//        4
//        3
//        2
//        1


console.log('*********************************************')



// table of 2

for (let i = 2 ; i <= 20 ; i=i + 2) 
{ 
    console.log(i) 
}
//o/p--> 2  4  6  8  10  12  14  16  18  20



console.log('*********************************************')    



// break statement 

//ex1
for(let i = 1 ; i <= 5 ; i++) 
{ 
    if(i == 3)
    {
        break
    }
    console.log(i)       //o/p--> 1  2
}




//ex2
for(let i = 1 ; i <= 5 ; i++)
{  
    console.log(i)     //o/p---> 1  2  3 
    if(i == 3)
    {
        break
    }
    
}





console.log('*********************************************')



// continue statement 

//ex1
for (let i = 0 ; i <= 5 ; i++)
{
    if(i==4)
    {
        continue
    }
    console.log(i)     //o/p--> 0  1  2  3  5
}


//ex2
for(let j = 5 ; j >= 0 ; j--)
{
   
    if(j == 2)
    {
        continue
    }
    console.log(j)        //o/p-->  5  4  3  1  0
}