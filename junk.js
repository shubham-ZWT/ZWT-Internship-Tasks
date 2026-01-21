// let x = 5;
// {
//     let x =10
//     console.log(x)
// }

// console.log(x)

// let date = Date.now()
// console.log(Math.floor(Math.random() * 1000));

// function myName () {
//     let name = "Sanket";
//     return function(){
//         name = "Yash";
//         return name;
//     };
// }

// const junk = myName()

// class Car {
//     constructor(model,year){
//         this.model = model;
//         this.year = year
//     }
// }

// const myCar = new Car("lam",2012)
// console.log(myCar.model)

// function myName(name){
//     console.log("this is fun");
// }

// myName();

// const myPromise = new Promise((resolve,reject)=>{

//     let is_true = true;

//     if(is_true){
//         resolve("Data is true");
//     }
//     else{
//         reject("Data is false/rejected");
//     }
// });

// myPromise
// .then(result => console.log(result))
// .catch(err => console.log(err))
// .finally(()=>console.log("this is finally this will run always"))

// function fetchUser(){
//     return new Promise(resolve =>{
//         setTimeout(()=> resolve("User Found"),2000);
//     })
// }

// async function getUser() {
//     try {
//         const user = await fetchUser();
//         console.log(user);
//     } catch (error) {
//         console.error(error);
//     }

// }

// getUser();

const input = [11,9, 8, 7, 6];

// 1.
// const in_placeReverse = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;
//   console.log(left, right);

//   for (let i = 0; i < arr.length; i++) {
//     if (left < right) {
//       temp = arr[left];
//       arr[left] = arr[right];
//       arr[right] = temp;
//       left++;
//       right--;
//     } else if (left === right || left > right) {
//       break;
//     }
//   }

//   console.log(arr);
// };

// in_placeReverse(input);


// 2.
// const secondMax = (arr) => {
//   let max = -1;
//   let secMax = -1;

//   for (const n of arr) {
//     // console.log(n);
//     if (n > max) {
//       secMax = max;
//       max = n;
//       // console.log(max,secMax)
//     } else if (n < max && n > secMax) {
//       secMax = n;
//     }
//   }

//   console.log(secMax);
// };

// secondMax(input);
