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
