const jwt = require("jsonwebtoken");

const authMiddlware = (req, res, next) => {
  //   console.log(req.headers);
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (!token) {
    res.status(400).json({ message: "Unauthenticated" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    
    res.status(401).json({ error: "Invalid token" });
  }

  next();
};

module.exports = authMiddlware;
