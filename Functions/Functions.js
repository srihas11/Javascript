var sayHello = function(Ben) { // A way of grouping code together and giving it a name, so that we can call it by that name later, and that's what we call a function.
    console.log("Hello!");
 };
 var addNumbers = function(num1, num2) {
    var result = num1 + num2;
    return result;
  };
  
  var sum = addNumbers(5, 2);
  console.log(sum) // Displays "7",the functions would take in the input as arguments and output the result using a return statement.
 
  var globalResult;

  var addNumbers = function(num1, num2) {
    globalResult = num1 + num2;
    console.log("The global result is: " + globalResult);
  };
  addNumbers(88, 7);
  console.log(globalResult);

  