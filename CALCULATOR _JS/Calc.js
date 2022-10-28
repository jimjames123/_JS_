function calculate(){


// ask user for first number of digits
var firstNumber;
firstNumber=prompt('Enter your first number of digits');
// ask user for second number of digits

var secondNumber;

secondNumber=prompt('Enter your second number of digits');

// ask user for mode of operation
var operator;
operator=prompt(' Enter operator(+,-,/,*) ');
// display the results for the users
var result;
if (operator=='+') {
 result= Number(firstNumber) + Number(secondNumber);
}
else if (operator=='-') {
  result= Number(firstNumber) - Number(secondNumber);
}  
else if (operator=='*') {
  result= Number(firstNumber) * Number(secondNumber);
}  
else if (operator=='/') {
  result= Number(firstNumber) * Number(secondNumber);
}  else{
 result=ERROR;
}




alert(result);
}