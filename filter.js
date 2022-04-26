const ages=[20,34,12,56,20]
console.log(ages.filter(checkAdult))
function checkAdult(ages) {
  return ages >= 18;
}
// console.log(ages)