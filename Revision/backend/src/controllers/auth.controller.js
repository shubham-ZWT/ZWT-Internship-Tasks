const { registerUser, LoginUser } = require("../services/auth.service");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "Email and password is required for registration",
    });
  }

  const user = await registerUser(email, password);

  if (user) {
    return res
      .status(200)
      .json({ success: true, user: user, message: "User Registered !!" });
  }

  res.status(400).json({ success: false, message: "Failed to register User" });
};

exports.login = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "Email and password is required for Login",
    });
  }

  const user = await LoginUser(email, password);

  if (user) {
    const payload = { id: user.id, email: user.email, role: user.role };
    token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1HR" });

    return res.status(200).json({
      success: true,
      user: user,
      token: token,
      message: "User Logined !!",
    });
  }

  res.status(400).json({ success: false, message: "Failed to Login User" });
};