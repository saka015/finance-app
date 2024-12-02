// auth.js
import jwt from "jsonwebtoken";

const isLoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Unauthorized" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const isLoggedOut = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader)
    return res.status(400).json({ message: "Already logged in!" });
  next();
};

export default { isLoggedIn, isLoggedOut };
