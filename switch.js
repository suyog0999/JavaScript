
// program 1---> switchcase without break
// without break statement we cant break on any case


let city = "indore"
switch(city)
{
    case "pune":
        console.log("MH")
    case "indore":
        console.log("MP")
    case "jaipur":
        console.log("RJ")
    default:
        console.log("Invalid")
}
//o/p---> MP
//        RJ
//        Invalid


console.log('******************************************')



// program 2---> switchcase with break 

let city2 = "mumbai"
switch(city2)
{
    case "mumbai":
        console.log("MH")
        break;
    case "indore":
        console.log("MP")
        break;
    case "jaipur":
        console.log("RJ")
        break;
    default:
        console.log('Incorrect city name')
}
//o/p---> MH


console.log('******************************************************')



// program3

let vehical = "scorpio"
switch(vehical)
{
    case "scorpio":
    case "bolero":
        console.log("MAHINDRA")
        break;
    case "indica":
    case "indigo":
        console.log("TATA")
        break;
    case "swift":
    case "swift Disire":
        console.log("MARUTI SUZUKI")
        break;
    default:
        console.log('INVALID')
 }
//o/p---> MAHINDRA








