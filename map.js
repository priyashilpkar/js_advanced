
// JavaScript Demo: Array.from()

// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
// console.log(Array.from('foo'));                 // Array from a String
// // expected output: Array ["f", "o", "o"]
// console.log(Array.from([1, 2, 3], x => x + x));"b":20},{"a":30,"b":40},{"a":50,"b":60}];
// var c=a.map(value=> value.a);
// console.log(c)
// // expected output: Array [2, 4, 6]



// Map()


// var a=[1,3,5,8,10]
// var b=a.map(test);
// console.log(b)
// function test(x){
//     return x*5
// }


// var a=[10,20,30,40,50]
// var b=a.map(function(value,i){
//     value++;
//     return value
//     console.log(value,i)

// })
// console.log(a)
// console.log(b)


// var a=[{'a':10,"b":20},{"a":30,"b":40},{"a":50,"b":60}];
// a.map(function(value){
// console.log(value.a)
// console.log(value.b)
// })



// var a=[{'a':10,"b":20},{"a":30,"b":40},{"a":50,"b":60}];
// var c=a.map(function(value){
// return (value.a,value.b)
// })
// console.log(c)



// var a=[{'a':10,"b":20},{"a":30,"b":40},{"a":50,"b":60}];
// var c=a.map(value=> value.a);
// console.log(c)



// var a=[{"fname":"yahoo",'lname':"baba"},{'fname':'rahul',"lname":"kumar"},{"fnmae":'karan',"lname":"sharma"}]
// var b=a.map(test);
// console.log(b)
// function test(x){
//     return x.fname +" "+ x.lname;
// }




// a=[3,54,6,7]
// i=0
// m=[]
// while (i<a.length){
//     if (a[0]!=a[3]){
//         b=a.slice(1)
//         m.push(b)
//     i=i+1}
// }
// console.log(m)

// {2[2,4,6,8,10,12,14,16,18,20]}

m={}
i=1
while (i<=5){
    j=1
    n=[]
    while (j<=10){
        c=i*j
        n.push(c)
        m[i]=n   
    j=j+1}
i=i+1}
console.log(m)
    