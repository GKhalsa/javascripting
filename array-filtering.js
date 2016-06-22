var numbers = [1,2,3,4,5,6,7,8,9,10];

function filteredNumbers(number){
  return number % 2 === 0;
}

// var filtered = numbers.filter(function(number){
//   return number % 2 === 0;
// })

var filtered = numbers.filter(filteredNumbers);

console.log(filtered);
