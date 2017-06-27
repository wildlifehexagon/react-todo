// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['George', 'Jerry'];
// var groupB = ['Elaine', 'Kramer'];
// var final = [...groupA, ...groupB];
//
// console.log(final);

var person = ['Eric', 31];
var personTwo = ['Carlene', 32];

function greeting(name, age) {
  console.log('Hi ' + name  + ', you are ' + age);
}

greeting(...person);
greeting(...personTwo);

var names = ['Jerry', 'George'];
var final = [...names, 'Elaine', 'Kramer'];

final.forEach(function(name) {
  console.log('Hi ' + name);
});
