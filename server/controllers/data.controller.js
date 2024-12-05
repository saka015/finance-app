// import AssetsAndInvestments from "../models/assetsAndInvestments.model.js";
// import ExpenseDetails from "../models/ExpenseDetails.model.js";
// import IncomeDetails from "../models/IncomeDetails.model.js";
// import InsuranceDetails from "../models/InsuranceDetails.model.js";
// import LiabilitiesAndDebts from "../models/LiabilitiesAndDebts.model.js";
// import RetirementPlan from "../models/RetirementPlan.model.js";
// import EmergencyFund from "../models/EmergencyFund.model.js";

// import User from "../models/user.model.js";

// const savePortfolio = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const month = req.params.month;
//     const assetData = req.body;

//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ error: "User not found" });

//     await saveFinancialDataForUser(user, month, assetData, "assets");

//     res
//       .status(200)
//       .json({ message: "Assets and Investments saved successfully!" });
//   } catch (error) {
//     console.error("Error saving portfolio:", error);
//     res.status(500).json({
//       error: "Failed to save portfolio",
//       details: error.message,
//     });
//   }
// };

// const saveExpenseDetails = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const month = req.params.month;
//     const expenseData = req.body;

//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ error: "User not found" });

//     await saveFinancialDataForUser(user, month, expenseData, "expenses");

//     res.status(200).json({ message: "Expense details saved successfully!" });
//   } catch (error) {
//     console.error("Error saving expense details:", error);
//     res.status(500).json({
//       error: "Failed to save expense details",
//       details: error.message,
//     });
//   }
// };

// const saveFinancialDataForUser = async (user, month, data, dataType) => {
//   const monthIndex = user.months.findIndex((m) => m.month === month);

//   let monthData = {};

//   if (monthIndex === -1) {
//     // Create new month entry
//     monthData.month = month;
//     monthData.data = {};
//     user.months.push(monthData);
//   } else {
//     monthData = user.months[monthIndex].data;
//   }

//   let doc, Model;

//   if (dataType === "assets") {
//     Model = AssetsAndInvestments;
//     let existingAsset = monthData.assetsAndInvestments;
//     if (existingAsset) {
//       doc = await Model.findById(existingAsset);
//       if (doc) {
//         doc.set(data);
//         await doc.save();
//       } else {
//         doc = new Model(data);
//       }
//     } else {
//       doc = new Model(data);
//     }
//   } else if (dataType === "expenses") {
//     Model = ExpenseDetails;
//     let existingExpense = monthData.expenseDetails;
//     if (existingExpense) {
//       doc = await Model.findById(existingExpense);
//       if (doc) {
//         doc.set(data);
//         await doc.save();
//       } else {
//         doc = new Model(data);
//       }
//     } else {
//       doc = new Model(data);
//     }
//   } else {
//     throw new Error("Invalid dataType");
//   }

//   const savedDoc = await doc.save();

//   if (dataType === "assets") {
//     monthData.assetsAndInvestments = savedDoc._id;
//   } else {
//     monthData.expenseDetails = savedDoc._id;
//   }

//   if (monthIndex === -1) {
//     //only save if its a new month entry
//     await user.save();
//   } else {
//     user.months[monthIndex] = { month: month, data: monthData }; // Update the month entry within the array.
//     await user.save();
//   }
// };

// const saveIncomeDetails = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const month = req.params.month;
//     const incomeData = req.body;

//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ error: "User not found" });

//     // Directly save the income data for the user
//     await saveIncomeDataForUser(user, month, incomeData);

//     res.status(200).json({ message: "Income details saved successfully!" });
//   } catch (error) {
//     console.error("Error saving income details:", error);
//     res.status(500).json({
//       error: "Failed to save income details",
//       details: error.message,
//     });
//   }
// };

// const saveInsuranceDetails = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const month = req.params.month;
//     const insuranceData = req.body;

//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ error: "User not found" });

//     // Directly save the insurance data for the user
//     await saveInsuranceDataForUser(user, month, insuranceData);

//     res.status(200).json({ message: "Insurance details saved successfully!" });
//   } catch (error) {
//     console.error("Error saving insurance details:", error);
//     res.status(500).json({
//       error: "Failed to save insurance details",
//       details: error.message,
//     });
//   }
// };

// const saveLiabilitiesAndDebts = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const month = req.params.month;
//     const liabilitiesData = req.body;

//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ error: "User not found" });

//     // Directly save the liabilities data for the user
//     await saveLiabilitiesDataForUser(user, month, liabilitiesData);

//     res
//       .status(200)
//       .json({ message: "Liabilities and debts saved successfully!" });
//   } catch (error) {
//     console.error("Error saving liabilities and debts:", error);
//     res.status(500).json({
//       error: "Failed to save liabilities and debts",
//       details: error.message,
//     });
//   }
// };

// const saveRetirementPlan = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const month = req.params.month;
//     const retirementData = req.body;

//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ error: "User not found" });

//     // Directly save the retirement data for the user
//     await saveRetirementDataForUser(user, month, retirementData);

//     res.status(200).json({ message: "Retirement plan saved successfully!" });
//   } catch (error) {
//     console.error("Error saving retirement plan:", error);
//     res.status(500).json({
//       error: "Failed to save retirement plan",
//       details: error.message,
//     });
//   }
// };

// const saveEmergencyFund = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const month = req.params.month;
//     const emergencyFundData = req.body;

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Directly save the emergency fund data for the user
//     await saveEmergencyFundDataForUser(user, month, emergencyFundData);

//     res.status(200).json({ message: "Emergency fund saved successfully!" });
//   } catch (error) {
//     console.error("Error saving emergency fund:", error);
//     res.status(500).json({
//       error: "Failed to save emergency fund",
//       details: error.message,
//     });
//   }
// };

// export default {
//   savePortfolio,
//   saveExpenseDetails,
//   saveIncomeDetails,
//   saveInsuranceDetails,
//   saveLiabilitiesAndDebts,
//   saveRetirementPlan,
//   saveEmergencyFund,
// };

import AssetsAndInvestments from "../models/assetsAndInvestments.model.js";
import ExpenseDetails from "../models/ExpenseDetails.model.js";
import IncomeDetails from "../models/IncomeDetails.model.js";
import InsuranceDetails from "../models/InsuranceDetails.model.js";
import LiabilitiesAndDebts from "../models/LiabilitiesAndDebts.model.js";
import RetirementPlan from "../models/RetirementPlan.model.js";
import EmergencyFund from "../models/EmergencyFund.model.js";
import User from "../models/user.model.js";

// Save portfolio data (Assets and Investments)
const savePortfolio = async (req, res) => {
  try {
    const userId = req.params.userId;
    const month = req.params.month;
    const assetData = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    await saveFinancialDataForUser(user, month, assetData, "assets");

    res
      .status(200)
      .json({ message: "Assets and Investments saved successfully!" });
  } catch (error) {
    console.error("Error saving portfolio:", error);
    res
      .status(500)
      .json({ error: "Failed to save portfolio", details: error.message });
  }
};

// Save expense details
const saveExpenseDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const month = req.params.month;
    const expenseData = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    await saveFinancialDataForUser(user, month, expenseData, "expenses");

    res.status(200).json({ message: "Expense details saved successfully!" });
  } catch (error) {
    console.error("Error saving expense details:", error);
    res.status(500).json({
      error: "Failed to save expense details",
      details: error.message,
    });
  }
};

// Helper function to save data for various financial types (assets, expenses, etc.)
const saveFinancialDataForUser = async (user, month, data, dataType) => {
  const monthIndex = user.months.findIndex((m) => m.month === month);

  let monthData = {};

  if (monthIndex === -1) {
    monthData.month = month;
    monthData.data = {};
    user.months.push(monthData);
  } else {
    monthData = user.months[monthIndex].data;
  }

  let doc, Model;

  switch (dataType) {
    case "assets":
      Model = AssetsAndInvestments;
      await saveDataForType(Model, monthData, "assetsAndInvestments", data);
      break;
    case "expenses":
      Model = ExpenseDetails;
      await saveDataForType(Model, monthData, "expenseDetails", data);
      break;
    case "income":
      Model = IncomeDetails;
      await saveDataForType(Model, monthData, "incomeDetails", data);
      break;
    case "insurance":
      Model = InsuranceDetails;
      await saveDataForType(Model, monthData, "insuranceDetails", data);
      break;
    case "liabilities":
      Model = LiabilitiesAndDebts;
      await saveDataForType(Model, monthData, "liabilitiesAndDebts", data);
      break;
    case "retirement":
      Model = RetirementPlan;
      await saveDataForType(Model, monthData, "retirementPlan", data);
      break;
    case "emergency":
      Model = EmergencyFund;
      await saveDataForType(Model, monthData, "emergencyFund", data);
      break;
    default:
      throw new Error("Invalid dataType");
  }

  if (monthIndex === -1) {
    await user.save();
  } else {
    user.months[monthIndex] = { month: month, data: monthData };
    await user.save();
  }
};

// Save data for specific types (Assets, Expenses, etc.)
const saveDataForType = async (Model, monthData, fieldName, data) => {
  let doc;
  let existingData = monthData[fieldName];
  if (existingData) {
    doc = await Model.findById(existingData);
    if (doc) {
      doc.set(data);
      await doc.save();
    } else {
      doc = new Model(data);
    }
  } else {
    doc = new Model(data);
  }

  const savedDoc = await doc.save();
  monthData[fieldName] = savedDoc._id;
};

// Save income details
const saveIncomeDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const month = req.params.month;
    const incomeData = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    await saveFinancialDataForUser(user, month, incomeData, "income");

    res.status(200).json({ message: "Income details saved successfully!" });
  } catch (error) {
    console.error("Error saving income details:", error);
    res
      .status(500)
      .json({ error: "Failed to save income details", details: error.message });
  }
};

// Save insurance details
const saveInsuranceDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const month = req.params.month;
    const insuranceData = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    await saveFinancialDataForUser(user, month, insuranceData, "insurance");

    res.status(200).json({ message: "Insurance details saved successfully!" });
  } catch (error) {
    console.error("Error saving insurance details:", error);
    res.status(500).json({
      error: "Failed to save insurance details",
      details: error.message,
    });
  }
};

// Save liabilities and debts
const saveLiabilitiesAndDebts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const month = req.params.month;
    const liabilitiesData = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    await saveFinancialDataForUser(user, month, liabilitiesData, "liabilities");

    res
      .status(200)
      .json({ message: "Liabilities and debts saved successfully!" });
  } catch (error) {
    console.error("Error saving liabilities and debts:", error);
    res.status(500).json({
      error: "Failed to save liabilities and debts",
      details: error.message,
    });
  }
};


// Save retirement plan
const saveRetirementPlan = async (req, res) => {
  try {
    const userId = req.params.userId;
    const month = req.params.month;
    const retirementData = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    await saveFinancialDataForUser(user, month, retirementData, "retirement");

    res.status(200).json({ message: "Retirement plan saved successfully!" });
  } catch (error) {
    console.error("Error saving retirement plan:", error);
    res.status(500).json({
      error: "Failed to save retirement plan",
      details: error.message,
    });
  }
};

// Save emergency fund details
const saveEmergencyFund = async (req, res) => {
  try {
    const userId = req.params.userId;
    const month = req.params.month;
    const emergencyFundData = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    await saveFinancialDataForUser(user, month, emergencyFundData, "emergency");

    res.status(200).json({ message: "Emergency fund saved successfully!" });
  } catch (error) {
    console.error("Error saving emergency fund:", error);
    res
      .status(500)
      .json({ error: "Failed to save emergency fund", details: error.message });
  }
};

export default {
  savePortfolio,
  saveExpenseDetails,
  saveIncomeDetails,
  saveInsuranceDetails,
  saveLiabilitiesAndDebts,
  saveRetirementPlan,
  saveEmergencyFund,
};
