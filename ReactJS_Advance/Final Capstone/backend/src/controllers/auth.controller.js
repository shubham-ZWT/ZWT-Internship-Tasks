const jwt = require("jsonwebtoken");

const { con } = require("../db/config");
exports.Login = (req, res) => {
  console.log("login req received");
  const { email, password } = req.body;
  console.log(email, password);

  const sql = "SELECT id, email,password from users where email = ?";

  con.query(sql, [email], (error, result) => {
    if (error) {
      console.error(error);
      throw new Error(error.message);
    } else {
      if (password === result[0].password) {
        console.log("password matched");
        console.log(result[0]);
        const payload = { id: result[0].id, email: result[0].email };
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        res
          .status(200)
          .json({ success: true, token: token, email: result[0].email });
      } else {
        return res.status(200).json({ message: "Incorrect Credentials" });
      }
    }
  });
};
