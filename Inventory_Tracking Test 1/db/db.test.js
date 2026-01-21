const conn = require("./db.config");
require("dotenv").config();
conn.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("DB connected");
  }
});
