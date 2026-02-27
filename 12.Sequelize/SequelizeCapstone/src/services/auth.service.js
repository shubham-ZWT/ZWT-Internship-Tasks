const { User } = require("../models");
const jwt = require("jsonwebtoken");

exports.createUser = async (name, email, password, role) => {
  const user = await User.create({ name, email, password, role });
  return user;
};

exports.loginUser = async (email, password) => {
  const user = await User.unscoped().findOne({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await user.validatePassword(password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "24h" },
  );

  const userData = user.toJSON();
  delete userData.password;
  delete userData.deletedAt;

  return { user: userData, token };
};
