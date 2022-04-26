// str=" " 
// for (i=1;i<=5;i++){
//     for (j=1;j<=5-i;j++){
//         str=str+" "
    
//     console.log(str,"\n")
//     }
// for (k=1;k<=i;k++){
//     str=str+"*"
// }
// // console.log(str,"\n")
// }






for (i=1;i<=5;i=i+1){
    str=""
    for (j=1;j<=i;j=j+1){
        str=str+"*"
       // console.log(" ")
    }
    console.log(str,"\n")

}







// function perfect(n){
//     var i=1;
//     var sum=0;
//     while (i<n){
//         if (n%i===0){
//             sum+=i
//         }
//         i++
//     }
//     if (n===sum){
//         console.log("perfect number");
//     }
//     else{
//         console.log("not perfect number")
//     }
// }
// var n=require("readline-sync").questionInt("enter a number")
// perfect(n)


function fun(n){
    t=n
    sum=0
    i=1
    while (n>=i){
        r=t%10
        sum=sum+r
        sum
        t=t/10
        i=i+1
    }
s=Number(sum)
if (s%n==0){
    console.log(n,'harshad number')
}
else{
    console.log(n,s,"not harshad")
}
}
a=require("readline-sync").questionInt("enter number")
fun(a)