const { stdin } = require("process")

var readLine=require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readLine.question("Enter array : ",array=>{
    var arr=array.split(" ")
    var small=arr[0]
    var large=arr[0]
    var sum=0
    arr.forEach(element => {
        element=Number(element)
        sum+=element
        if(small>element)
        small=element
        else if(large<element)
        large=element
    });
    console.log("min = "+(sum-large)+" and max = "+(sum-small))
    readLine.close()
})
