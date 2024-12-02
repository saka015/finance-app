import express from "express";
import auth from "../middlewares/auth.js";
import dataController from "../controllers/data.controller.js";

const dataRoute = express.Router();

dataRoute.post(
  "/portfolio/:userId",
  auth.isLoggedIn,
  dataController.savePortfolio
);
dataRoute.post(
  "/expenses/:userId",
  auth.isLoggedIn,
  dataController.saveExpenseDetails
);
dataRoute.post(
  "/income/:userId",
  auth.isLoggedIn,
  dataController.saveIncomeDetails
);
dataRoute.post(
  "/insurance/:userId",
  auth.isLoggedIn,
  dataController.saveInsuranceDetails
);
dataRoute.post(
  "/liabilities/:userId",
  auth.isLoggedIn,
  dataController.saveLiabilitiesAndDebts
);
dataRoute.post(
  "/retirement/:userId",
  auth.isLoggedIn,
  dataController.saveRetirementPlan
);
dataRoute.post(
  "/emergencyFund/:userId",
  auth.isLoggedIn,
  dataController.saveEmergencyFund
);

export default dataRoute;
