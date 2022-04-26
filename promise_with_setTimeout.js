// function prom(a){
//     return new Promise(function(Resolve,Reject){
//     setTimeout (()=>{
//     if (a){
//         Resolve("it`s true")
//     }else{
//         Reject("it`s false")
//     }
// },3000)
// })
// }
// let fulfill=(result)=>{
//     console.log(result)
// }
// let rejection=(error)=>{
//     console.log(error)
// }
// prom(false).then(fulfill).catch(rejection)











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
prom(true).then(fulfillment)       //   or  prom(true).then(fulfillmennt).catch(rejection)
prom(true).catch(rejection)  
