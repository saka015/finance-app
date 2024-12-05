import express from "express";
import auth from "../middlewares/auth.js";
import dataController from "../controllers/data.controller.js";

const dataRoute = express.Router();

const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).json({ error: "Internal Server Error" });
};

dataRoute.put(
  "/portfolio/:userId/:month",
  auth.isLoggedIn,
  dataController.savePortfolio
);
dataRoute.put(
  "/expenses/:userId/:month",
  auth.isLoggedIn,
  dataController.saveExpenseDetails
);
dataRoute.put(
  "/income/:userId/:month",
  auth.isLoggedIn,
  dataController.saveIncomeDetails
);
dataRoute.put(
  "/insurance/:userId/:month",
  auth.isLoggedIn,
  dataController.saveInsuranceDetails
);
dataRoute.put(
  "/liabilities/:userId/:month",
  auth.isLoggedIn,
  dataController.saveLiabilitiesAndDebts
);
dataRoute.put(
  "/retirement/:userId/:month",
  auth.isLoggedIn,
  dataController.saveRetirementPlan
);
dataRoute.put(
  "/emergencyFund/:userId/:month",
  auth.isLoggedIn,
  dataController.saveEmergencyFund
);

dataRoute.use(errorHandler);

export default dataRoute;
