const pool = require("../db/db");

addProject = async (req, res) => {
  const { projectName } = req.body;

  console.log("checking for ", projectName);

  let connection;
  try {
    connection = await pool.getConnection();

    try {
      const [result] = await connection.query(
        "INSERT INTO projects (project_name) VALUES (?)",
        [projectName]
      );

      const [rows] = await connection.query(
        "SELECT project_id, project_name FROM projects WHERE id = ?",
        [result.insertId]
      );
      return res.status(201).json({
        project: rows[0],
        created: true,
      });
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        const [rows] = await connection.query(
          "SELECT project_id, project_name FROM projects WHERE project_name = ?",
          [projectName]
        );

        return res.status(200).json({
          project: rows[0],
          created: false,
        });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to create project",
    });
  } finally {
    if (connection) connection.release();
  }
};

module.exports = { addProject };
