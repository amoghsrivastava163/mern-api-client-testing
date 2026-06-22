const jwt = require("jsonwebtoken");

const adminProtect = (
  req,
  res,
  next
) => {
  const token =
    req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Access Denied",
    });
  }

  try {
    jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = adminProtect;