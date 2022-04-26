// function fun(some){
//     console.log(some)
// }
// let promise=new Promise(function(Resolve,Reject){
//     let x=0
//     if (x==5){
//         Resolve("ok")
//     }else{
//         Reject("Error")
//     }
// })
// promise.then(
//     function(value) {fun(priya);},
//     function(error1) {fun(error1);}
// )









// let a=true
// let prom=new Promise(function(Resolve,Reject){
//     if (a){
//         Resolve("I am sucessfull")
//     }else{
//         Reject("I am fail")
//     }
// })
// console.log(prom)









// function  prom(a){
//     return new Promise(function(Resolve,Reject){
//         if (a){
//             Resolve("pass")
//         }else{
//             Reject("fail")
//         }
//     })
// }
// console.log(prom(true))













function prom(a){
    return new Promise(function(Resolve,Reject){
        if (a){
            Resolve("I am sucessfull")
        }else{
            Reject("I am fail")
        }
    })
}
let fulfillment=(result)=>{
    console.log(result)
}
let rejection=(error)=>{
    console.log(error)
}
prom(true).then(fulfillment)
prom(true).catch(rejection)


















// const num=[1,2,3,4,5,6,7]
// var array=num.map((element) => {
//     console.log(element)
// });