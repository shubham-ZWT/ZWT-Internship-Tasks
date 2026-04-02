const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const headers = req.headers;
  console.log(headers);
  if (headers.authorization) {
    const token = headers.authorization.split(" ")[1];

    if (token) {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      return next();
    }

    return res
      .status(200)
      .json({ success: false, message: "Auth Token not found" });
  }
  return res
    .status(200)
    .json({ success: false, message: "Auth Token not found" });
};

exports.authRoleMiddleware =
  (...roles) =>
  (req, res, next) => {
    console.log(roles);
    if (roles.includes(req.user.role)) {
      return next();
    }
    return res.status(403).json({ message: "Access Denied" });
  };
