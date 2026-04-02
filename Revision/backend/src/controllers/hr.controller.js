const { getUserdata, updateUserdata } = require("../services/hr.service");

const hrController = {
  getHrDashboardData: async (req, res) => {
    const { q, page, limit } = req.query;

    const { totalrecords, totalPages, currentPage, rows } = await getUserdata(
      q,
      page,
      limit,
    );

    res
      .status(200)
      .json({ success: true, totalrecords, totalPages, currentPage, rows });
  },

  updateUser: async (req, res) => {
    console.log(req.body);

    const user = await updateUserdata(req.body);

    res.status(200).json({ success: true, message: "updating user" });
  },
};

module.exports = hrController;
