import { add, sub, multiply, divide } from "./math.js";

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

const result = add(num1, num2);

console.log("Result of Add is : ", result);
console.log("Result of Sum is : ", sub(num1, num2));
console.log("Result of Multiply is : ", multiply(num1, num2));
console.log("Result of Divide is : ", divide(num1, num2));
