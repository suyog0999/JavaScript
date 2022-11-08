//program 1
 
let birthYears=[1990,1991,1992,1993,1994]
let ages=[]                              
for(let i=0; i<birthYears.length; i++)
{
    //console.log(i)
    //console.log(birthYears[i])
    //console.log(2022-birthYears[i])
    let ag=2022-birthYears[i]
    ages.push(ag)
}
console.log(ages)

//o/p->     [ 32, 31, 30, 29, 28 ]




//program 2
let marks=[33,44,55,22,13,45,67]
let above50=[]
for(let i=0; i<marks.length; i++)
{
    if(marks[i]>50)
    {
        above50.push(marks[i])
    }
}
console.log(above50)

//o/p->   [ 55, 67 ]






//program 3
let a=[22,33,35]
sum=0
for(let i=0; i<a.length; i++)
    {
        sum=sum+a[i]
    }
    console.log(sum)

//o/p->  90






