const authService = require("../services/auth.service");

exports.register = async (req, res) => {
  console.log(req.body);
  const { name, email, password, role } = req.body;

  const user = await authService.createUser(name, email, password, role);

  res.status(200).json({ success: true, data: user });
};

exports.login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  const { user, token } = await authService.loginUser(email, password);
  res.status(200).json({ success: true, data: user, token: token });
};
