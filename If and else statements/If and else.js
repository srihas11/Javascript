var x = 5; // if statement tells the program to execute a block of code.
if (x > 0) { // This is a boolean value
  console.log('x is a positive number!')
}
var isPositive = x > 0; // Also store it in a variable,
console.log(isPositive) // then display it.

var degreesOutside = 35 // These are called logical operators.
var numberOfClouds = 50
if (degreesOutside < numberOfClouds) {
console.log("Wear Sun screen if it's hot outside or there aren't many clouds!")
}
var age = 15; // If we want to execute some block of code in the case that the if condition wasn't true - in that case, we add an else statement.
if (age > 16) {
  console.log('Yay, you can drive!');
} else {
  console.log('Sorry, but you have'  + (age - 16) +  'years until you can drive.');
}

var age = 30; // You can also use else if we want to check multiple conditions.
if (age >= 35) {
  console.log('You can vote AND hold any place in government!');
} else if (age >= 30) {
  console.log('You can vote AND run for the Senate!');
} else if (age >= 18) {
  console.timeLog('You can vote!');
} else {
  console.log('You have no voice in government!');
}
