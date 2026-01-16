const { con } = require("./db");

con.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    // const sql = "create table employees (id int auto_increment primary key, first_name varchar(50),last_name varchar(50),email varchar(100),hire_date date,salary decimal);";

    // const query =
    //   "INSERT INTO employees (first_name,last_name,email,hire_date,salary) VALUES ?";
    // const insertEmployees = [
    //   ["Sanket", "Patel", "sanket@gmail.com", "2022-05-13", 70000],
    //   ["Yash", "Patel", "yash@gmail.com", "2022-05-07", 50000],
    //   ["Honey", "Arora", "honey@gmail.com", "2022-11-05", 70000],
    //   ["Meet", "Thakkar", "meet@gmail.com", "2023-03-07", 50000],
    //   ["Sahal", "Shaikh", "sahal@gmail.com", "2023-04-06", 60000],
    // ];

    con.query(query, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
      }
    });
    console.log("Connected to DB ");
  }
});
