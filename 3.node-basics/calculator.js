const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

console.log(num1, num2);

const add = (num1, num2) => {
  console.log("Add is : ", num1 + num2);
  return num1 + num2;
};

const sub = (num1, num2) => {
  console.log("Sub is : ", num1 - num2);
  return num1 - num2;
};

const multiply = (num1, num2) => {
  console.log("Multiply is : ", num1 * num2);
  return num1 * num2;
};

const divide = (num1, num2) => {
  console.log("Division is : ", num1 / num2);
  return num1 / num2;
};

add(num1, num2);
sub(num1, num2);
multiply(num1, num2);
divide(num1, num2);
