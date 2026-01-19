const pool = require("../db/db");

change_emp_state = async (req, res) => {
  console.log("is entered");
  const { emp_id, new_state } = req.body;
  const connection = await pool.getConnection();
  if (connection) console.log("connected to DB");
  try {
    let data = await connection.query(
      "CALL change_employee_state (?,?,@is_updated)",
      [emp_id, new_state],
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
    console.log(data);
    console.log("completed update");
    let [rows] = await connection.query("SELECT @is_updated AS is_updated");
    console.log(rows);
    const isUpdated = rows[0].is_updated;
    console.log(isUpdated);
    if (isUpdated === -1) {
      res.json({ message: "can not as emp is on project" });
    } else if (isUpdated === 1) {
      console.log("here");
      res.json({ message: "Emp state updated successfully" });
    } else {
      res.json({ message: "Emp inserted and state added" });
    }
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

module.exports = { change_emp_state };
