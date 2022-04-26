// const numbers = [10,2,2,1];             //  first number se second se sare number ko jodkar maines karta hai
// console.log(numbers.reduce(myfun))      //  5  
// function myfun(total,num){
//     return total-num 
// }



// const number=[10,2,2,1];                       //hum jo bhi operation karvate hain vahi pure element pe work karta hai
// console.log(number.reduce(myfun,2))            // like  10+2+2+1=15-2=-13  
// function myfun(total,num){                     //  like  10*2=20*2=40*1=40*20==80
//     return total+num
// }


// a=[3,5,78,9,6]
// b=(a.filter(fun))
// function fun(total1){
//     console.log(total1)
//     if (total1%2==0){
//         return total1
//     }
// }
// console.log(b)


// const marks=[{math:10,phy:20,chem:30,},{math:161,phy:50,chem:40}]
// var sum=0
// b=marks.reduce(fun)
// function fun(value){
//     sum=sum+value
//     return sum
// }
// console.log(b)


// const users = [
//   { id: 1, email: 'dcontreras@email.tld' },
//   { id: 2, email: 'afeher@email.tld' },
//   { id: 3, email: 'odj@email.tld' },
// ];


// const profiles = [
//   { userId: 1, firstName: 'Danielle', lastName: 'Contreras' },
//   { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' },
//   { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' },
// ];

// // Transform the profiles into an object keyed by the userId:
// const profilesByUserId = profiles.reduce((next, profile) => {
//   const { userId } = profile;
//   return { ...next, [userId]: profile };
// }, {});
// console.log(profilesByUserId)





// const FRUITS = ["banana", "apple", "orange", "banana", "orange", "apple", "apple", "orange", "orange", "banana", "orange", "banana"]
// const total = FRUITS.reduce((map, fruit) => ({...map,
//   [fruit]: (map[fruit] || 0) + 1,
// }), {})
// console.log(total)










const person = {
  firstName: 'Orpheus',
  lastName: 'De Jong',
  phone: '+1 123-456-7890',
  email: 'fake@email.tld',
};

const allowedProperties = ['firstName', 'lastName'];

const allKeys = Object.keys(person);
const result = allKeys.reduce((next, key) => {
  if (allowedProperties.includes(key)) {
  	return { ...next, [key]: person[key] };
  } else {
  	return next;
  }
}, {})
console.log(result)