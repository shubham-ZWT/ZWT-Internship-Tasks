const mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "mydb",
});

con.connect(function (err) {
  if (err) {
    console.error(err);
  }

  //Creating a DB
  //   con.query("CREATE DATABASE mydb", function (err, result) {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log(`DB Created${result}`);
  //   });

  //Creating a table
  //   let sql =
  //     "CREATE TABLE Customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";

  //   con.query(sql, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log("Table Created");
  //   });

  //Inserting a Table
  // let sql =
  //   "INSERT INTO Customers (name, address) VALUES ('Honey', 'Vadodara')";

  // con.query(sql, (err, result) => {
  //   if (err) {
  //     console.error(err);
  //   }
  //   console.log("Row Entered with ID", result.insertId);
  // });

  //Insering many rows
  //   let sql = "INSERT INTO Customers (name, address) VALUES ?";
  //   let values = [
  //     ["Meet", "Pune"],
  //     ["Sahal", "Vadodara"],
  //   ];

  //   con.query(sql, [values], (err, result) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log("Many Rows Entered ", result.affectedRows);
  //   });

  //Selecting all results form the db
  //   let sql = "SELECT name,address FROM Customers";
  //   con.query(sql, (err, result, fields) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     // console.log("Selecting All Rows", result[2].name);
  //     console.log(result);
  //   });

  //Using the where Clause
  //   let sql = "SELECT * FROM Customers WHERE address = 'Vadodara'";
  //   con.query(sql, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log("Selecting db using where clause \n ", result);
  //   });

  //Using the wILDCARD Clause
  //   let sql = "SELECT * FROM Customers WHERE name LIKE 'S%'";
  //   con.query(sql, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log("Selecting db using where and Wildcard clause \n ", result);
  //   });

  //Escape using mysql.escape for user input or ? : if multiple vlues then the arry must be of multiple values too while query
  //   let name = "Sanket";
  //   let address = "Ahmedabad";
  //   let sql = "SELECT * FROM Customers where name = ? and address = ?";

  //   con.query(sql, [name, address], (err, result) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log("Using Escape Chr ? \n ", result);
  //   });

  //Using the Order By
  //   let sql = "SELECT * FROM Customers WHERE address = 'Vadodara' ORDER BY name DESC";
  //   con.query(sql, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log("Selecting db using where clause \n ", result);
  //   });

  // Delete form the DB
  //   let sql = "DELETE FROM Customers WHERE id = 5 ";
  //   con.query(sql, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log("Deleted the user ", result.affectedRows);
  //   });

  //Updating a User
  //   let sql = "UPDATE Customers SET address = 'Ahmedabad' WHERE name = 'Meet'";
  //   con.query(sql, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log("Updated users ", result);
  //   });

  //Limit the sql
  //   let sql = "SELECT * FROM Customers LIMIT 2 OFFSET 2";
  //   con.query(sql, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log("Selecting with limit ", result);
  //   });

  console.log("Connected");
});
