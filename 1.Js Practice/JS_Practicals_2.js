// Throttle Functiuon : limits how often a function should run with in a given specific time.

// const mainFunc = (name, age) => {
//   console.log(
//     `This is the main function and my name is ${name} and my age is ${age}`
//   );
// };

// const throrrleFun = (fun, ...args) => {
//   let avai_run = true;

//   return () => {
//     if (avai_run) {
//       fun(args[0], args[1]);
//       avai_run = false;
//       setTimeout(() => {
//         avai_run = true;
//       }, 2000);
//     }
//   };
// };

// const throttle = throrrleFun(mainFunc, "sanket", 21);
// setInterval(() => {
//   throttle();
// }, 1000);

// Custom Bind

// let obj = {
//   name: "sanket",
//   age: 21,
// };

// function sayHello(lastName) {
//   console.log(`hello my name is ${this.name} ${lastName} with age ${this.age}`);
// }

// Bind
// let userWithFun = sayHello.bind(obj,"patel");
// userWithFun();

//Custom Bind

// Function.prototype.MyBind = function (obj_, ...args) {
//   const callingFun = this;
//   return function () {
//     callingFun.apply(obj_, args);
//   };
// };

// //CustomBind
// let customUser = sayHello.MyBind(obj, "patel", 21);
// customUser();

// Retry a same promise N times with day

// const failedPromise = () => {
//   {
//     return new Promise((resolve, reject) => {
//       let is_retry = Math.random();
//       console.log(`random in ${is_retry}`);
//       if (is_retry > 0.7) {
//         resolve("Promise Failed retrying...");
//       } else {
//         reject("Promise Resolved and Stop");
//       }
//     });
//   }
// };

// const retryPromise = async (fun, noOfTries, delay) => {
//   let retries = noOfTries;
//   const result = await fun();

//   const attempt = () => {
//     while (retries != 0) {
//       try {
//         console.log("inside try");
//         result
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((err) => {
//             console.err(err);
//           });
//       } catch (error) {
//         console.log("Error Here");
//       }
//     }
//   };
//   attempt();
// };

// retryPromise(failedPromise, 3, 2000);

// 2. Promise Chain Executer

// async function asyncFun1() {
//   return "hello 1";
// }
// async function asyncFun2() {
//   return "hello 2";
// }

// async function asyncFun3() {
//   return "hello 3";
// }

// const asyncList = [asyncFun1, asyncFun2, asyncFun3];

// for (const fun of asyncList) {
//   const result = await fun();
//   console.log(result);
// }

// 3. Deep Object Comparision

// const obj1 = {
//   name: { first: "sanket" },
//   age: 21,
// };
// const obj2 = {
//   name: { first: "yash" },
//   age: 21,
// };

// function isObject(value) {
//   return typeof value === "object" && value !== null && !Array.isArray(value);
// }

// // const obj2 = obj1;
// function deepComparision(object1, object2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length === keys2.length) {
//     console.log("length equal");
//     for (let i = 0; i < keys1.length; i++) {
//       if (keys1[i] === keys2[i]) {
//         let val1 = object1[keys1[i]];
//         let val2 = object2[keys2[i]];
//         let nestedObject = isObject(val1) && isObject(val2);
//         if (nestedObject) {
//           deepComparision(val1, val2);
//         } else {
//           if (val1 === val2) {
//             return true;
//           } else {
//             return false;
//           }
//         }
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
// }

// console.log(deepComparision(obj1, obj2));

// Memoization Function

// const memoize = (fun) => {
//   const myMap = new Map();
//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (myMap.has(key)) {
//       return myMap.get(key);
//     } else {
//       let result = fun.apply(this, args);
//       myMap.set(key, result);
//       return result;
//     }
//   };
// };

// function slowSquare(n) {
//   console.log("Calculating...");
//   return n * n;
// }

// const memoizeSquare = memoize(slowSquare);

// console.log(memoizeSquare(5));
// console.log(memoizeSquare(5));

const students = [
  { name: "sanket", age: 21, dept: "CSD" },
  { name: "Tithi", age: 20, dept: "IT" },
  { name: "Meet", age: 20, dept: "CSD" },
  { name: "Hani", age: 21, dept: "AI" },
];

const result = Object.groupBy(students, ({ dept }) => dept);

console.log(result);
