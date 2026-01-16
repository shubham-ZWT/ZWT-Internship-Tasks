//Input and Output from console
// ProcessingInstruction.stdout.write("Enter your name: ");
// ProcessingInstruction.stdin.on('data', (data) =&gt;{
//     cosnt
// })

// 1.Once Function

function onceFunction() {
  function sayHello() {
    let counter = true;
    return () => {
      if (counter) {
        console.log("Hello");
      }
      counter = false;
    };
  }

  const hello = sayHello();
  hello();
  hello();
  hello();
}

// 2.Debounce Basic
function debounceBasic() {
  let counter = 1;
  const consoleDebounce = () => {
    return function () {
      if (counter === 1) {
        counter = 0;
        setTimeout(() => {
          console.log("from timeout 500 ms");
          counter = 1;
        }, 500);
      }
    };
  };

  const test = consoleDebounce();
  setInterval(test, 100);
}

// test();
// setInterval(test(),100);
// setInterval(()=>{
//     const test = consoleDebounce;
//     test()
// },100);

// 3. Shallow vs Deep copy

function deepshallow() {
  const myObj = {
    a: 1,
    b: {
      c: 2,
    },
  };

  // Shallow copy
  let newObj = myObj;
  newObj.b.c = 3;
  console.log("old obj", myObj);
  console.log("new obj", newObj);

  // Deep copy
  let newObj_ = structuredClone(myObj);

  newObj_.b.c = 2;
  console.log("old obj", myObj);
  console.log("new obj", newObj_);
}

// using JSON.parse and JSON.stringify

//Shallow copy
// const newMyObj = {...myObj};
// console.log(`myObj : `,myObj);
// console.log(`newMyObj`,newMyObj);

// modify
// newMyObj.b.c = 3;
// console.log(`myObj after modify`,myObj);
// console.log(`newMyObj after modify`,newMyObj);

// Deep Copy
// const deepNewMyObj = JSON.parse(JSON.stringify(myObj));

// console.log("obj before deep copy modify ",myObj);
// console.log("new obj before deep copy modify", deepNewMyObj);

//modify
// console.log(deepNewMyObj.a);
// deepNewMyObj.b.c = 3;
// console.log("obj after deep copy modify",myObj);
// console.log("new obj after deep copy modify",deepNewMyObj);

// 4. Flatten Array

function flattenArray(arr_) {
  // let arr = [1,[2,[3,[4,5],2]]];
  let arr = arr_;

  // let arr = [1,2,3]
  let result = [];
  const len = arr.length;
  const flattenArr = (arr) => {
    // console.log(Number(arr[1]));
    // console.log(typeof(arr[1]));

    for (let i = 0; i < arr.length; i++) {
      // console.log(`running for ${arr[i]}`)
      // console.log(Number(arr[i]));
      if (Array.isArray(arr[i])) {
        // console.log("runnig if")
        flattenArr(arr[i]);
      } else {
        // console.log("runnig else")
        result.push(arr[i]);
      }
    }
  };

  flattenArr(arr);
  console.log(result);
}

// console.log(Number("sa"));

// const a = {name:"sa"};
// const b = a;
// console.log((Number.isNaN()))

// 5.Custom map

function customMap() {
  Array.prototype.MultiplyByTwo = function (callbackFun) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      // console.log(`index of ${this[i]} is ${this.indexOf(this[i])}`)
      result.push(callbackFun(this[i], i));
    }
    return result;

    // console.log(ind);
  };

  let mapInput = [1, 2, 3, 4];
  console.log(
    mapInput.MultiplyByTwo((item) => {
      // console.log("--",item)
      return item * 2;
    })
  );
}

// 6.Truthy / Falsy Value

function truthyFalsy(inputArr) {
  const input = inputArr;
  const filter = [];

  for (let i = 0; i < input.length; i++) {
    if (Boolean(input[i])) {
      filter.push(input[i]);
    }
  }

  console.log(filter);
}

// console.log(filter);

// 7.Event Loop Order

function eventLoopOrder() {
  console.log("this is 1");

  setTimeout(() => {
    console.log("this is from set timeout");
  }, 1000);

  console.log("this is between the settime out and the promise");

  const myPromise = new Promise((resolve, reject) => {
    let is_true = true;
    if (is_true) {
      resolve("From resolve");
    } else {
      reject("From Reject");
    }
  });

  console.log("This is between promise creation and promise call");

  myPromise
    .then(console.log("this is from Promise"))
    .catch(console.log("Error form the Promise"))
    .finally(console.log("finally from the Promise"));

  console.log("this is the last");
}

process.stdout.write(
  "Which Practical do you want to run : \n >>1.Once Function\n >>2.Debounce\n >>3.Deep Copy vs Shallow Copy\n >>4.Flatten Array\n >>5.Custom Map\n >>6.Truthy vs Falsy\n >>7.Event Loop Execution  \n\n "
);
process.stdin.on("data", (data) => {
  const args = data.toString().trim().split(" ");
  const input = args[0];
  const arr = args[1] && JSON.parse(args[1]);
  console.log(arr);
  // console.log(input.split(" "))

  if (Number(input) === 1) {
    onceFunction();
  } else if (Number(input) === 2) {
    // onceFunction();
    debounceBasic();
  } else if (Number(input) === 3) {
    deepshallow();
  } else if (Number(input) === 4) {
    // let arr_ ;
    // process.stdout.write("Enter your arr : ");
    // process.stdin.on('arr',(arr) => {
    //     console.log(arr)
    //     arr_ = JSON.parse(arr);
    // })

    flattenArray(arr);
  } else if (Number(input) === 5) {
    customMap();
  } else if (Number(input) === 6) {
    truthyFalsy();
  } else if (Number(input) === 7) {
    eventLoopOrder();
  } else {
    console.log("invalid input");
  }

  // process.exit();
});
