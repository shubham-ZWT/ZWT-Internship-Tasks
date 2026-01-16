const fs = require("fs");

fs.readFile("notes.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// fs.writeFile(
//   "notes.txt",
//   "This is Replaced First Line",
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//   }
// );

// fs.appendFile(
//   "notes.txt",
//   "\nThis will append in the next line",
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       console.error(err);
//     }
//   }
// );
