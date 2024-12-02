import express from "express";
import auth from "../middlewares/auth.js";
import userController from "../controllers/user.controller.js";

const userRoute = express.Router();

// Routes
userRoute.post("/register", auth.isLoggedOut, userController.createUser);

userRoute.post("/login", auth.isLoggedOut, userController.loginUser);

userRoute.get("/about", auth.isLoggedIn, (req, res) => {
  res.json({ message: "About Page" });
});

//This route is now JWT protected!
// userRoute.get("/getuserdata", userController.getUserData);

userRoute.get("/user", auth.isLoggedIn, userController.getUserData);


// data saving






export default userRoute;
