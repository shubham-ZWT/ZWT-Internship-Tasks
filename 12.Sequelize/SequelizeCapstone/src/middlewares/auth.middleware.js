const jwt = require("jsonwebtoken");

exports.Authenticate = (req, res, next) => {
  console.log(req.headers.authorization);
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    if (!token) {
      return res
        .status(404)
        .json({ success: false, message: "Token not Found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    return res.status(404).json({ success: false, message: "UnAuthorized" });
  }
};

exports.authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Role (${req.user.role}) is not allowed to access this resource.`,
      });
    }
    next();
  };
};
