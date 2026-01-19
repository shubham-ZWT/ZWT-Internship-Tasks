const jwt = require("jsonwebtoken");

const authMiddlware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (!token) {
    res.status(400).json({ message: "Unauthenticated" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }

  next();
};

module.exports = authMiddlware;
