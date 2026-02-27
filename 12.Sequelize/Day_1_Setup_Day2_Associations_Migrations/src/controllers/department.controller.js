const {Department} = require("../models");

exports.createDepartment = async (req, res) => {
  console.log(req.body);
  try {
    const department = await Department.create(req.body);

    res
      .status(200)
      .json({ message: "Employee created successfully", data: department });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};
