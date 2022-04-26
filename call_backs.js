function fun(some){
    console.log(some)
}
function fun1(num1,num2,callback){
    let sum=num1+num2;
    callback(sum)
}
fun1(3,3,fun)
function fun2(fun1){
    console.log("gv")
    fun1(2,3,fun)
}
fun2(fun1)






// function fun1(some){
//     console.log(some)
// }
// function fun2(num1,num2){
//     let sum=num1+num2;
//     return sum
// }
// let result=fun2(3,5);
// fun1(result)





// function fun1(some){
//     console.log(some)
// }
// function fun2(num1,num2){
//     let sum=num1+num2
//     fun1(sum);
// }
// fun2(4,6)





// "use strict";
// var a="10";
// console.log(a-7)




// function fun1(some){
//     console.log(some)
// }
// function fun2(){
//     fun1("hello")
// }
// function fun3(){
//     fun1("Goodbye");
// }
// fun3();
// fun2()  



