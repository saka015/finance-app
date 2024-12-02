// import AssetsAndInvestments from "../models/AssetsAndInvestments.model.js";
// import ExpenseDetails from "../models/ExpenseDetails.model.js";
// import IncomeDetails from "../models/IncomeDetails.model.js";
// import InsuranceDetails from "../models/InsuranceDetails.model.js";
// import LiabilitiesAndDebts from "../models/LiabilitiesAndDebts.model.js";
// import RetirementPlan from "../models/RetirementPlan.model.js";
// import EmergencyFund from "../models/EmergencyFund.model.js";

// const savePortfolio = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const existingAssets = await AssetsAndInvestments.findOne({ userId });

//     if (existingAssets) {
//       const updatedAssets = await AssetsAndInvestments.findByIdAndUpdate(
//         existingAssets._id,
//         { $set: req.body },
//         { new: true }
//       );
//       res.status(200).json(updatedAssets);
//     } else {
//       const newAssets = new AssetsAndInvestments({ ...req.body, userId });
//       const savedAssets = await newAssets.save();
//       res.status(201).json(savedAssets);
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save portfolio" });
//   }
// };

// const saveExpenseDetails = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const existingExpenses = await ExpenseDetails.findOne({ userId });

//     if (existingExpenses) {
//       const updatedExpenses = await ExpenseDetails.findByIdAndUpdate(
//         existingExpenses._id,
//         { $set: req.body },
//         { new: true }
//       );
//       res.status(200).json(updatedExpenses);
//     } else {
//       const newExpenses = new ExpenseDetails({ ...req.body, userId });
//       const savedExpenses = await newExpenses.save();
//       res.status(201).json(savedExpenses);
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save expenses" });
//   }
// };

// const saveIncomeDetails = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const existingIncome = await IncomeDetails.findOne({ userId });

//     if (existingIncome) {
//       const updatedIncome = await IncomeDetails.findByIdAndUpdate(
//         existingIncome._id,
//         { $set: req.body },
//         { new: true }
//       );
//       res.status(200).json(updatedIncome);
//     } else {
//       const newIncome = new IncomeDetails({ ...req.body, userId });
//       const savedIncome = await newIncome.save();
//       res.status(201).json(savedIncome);
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save income" });
//   }
// };

// const saveInsuranceDetails = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const existingInsurance = await InsuranceDetails.findOne({ userId });

//     if (existingInsurance) {
//       const updatedInsurance = await InsuranceDetails.findByIdAndUpdate(
//         existingInsurance._id,
//         { $set: req.body },
//         { new: true }
//       );
//       res.status(200).json(updatedInsurance);
//     } else {
//       const newInsurance = new InsuranceDetails({ ...req.body, userId });
//       const savedInsurance = await newInsurance.save();
//       res.status(201).json(savedInsurance);
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save insurance" });
//   }
// };

// const saveLiabilitiesAndDebts = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const existingLiabilities = await LiabilitiesAndDebts.findOne({ userId });

//     if (existingLiabilities) {
//       const updatedLiabilities = await LiabilitiesAndDebts.findByIdAndUpdate(
//         existingLiabilities._id,
//         { $set: req.body },
//         { new: true }
//       );
//       res.status(200).json(updatedLiabilities);
//     } else {
//       const newLiabilities = new LiabilitiesAndDebts({ ...req.body, userId });
//       const savedLiabilities = await newLiabilities.save();
//       res.status(201).json(savedLiabilities);
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save liabilities" });
//   }
// };

// const saveRetirementPlan = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const existingRetirement = await RetirementPlan.findOne({ userId });

//     if (existingRetirement) {
//       const updatedRetirement = await RetirementPlan.findByIdAndUpdate(
//         existingRetirement._id,
//         { $set: req.body },
//         { new: true }
//       );
//       res.status(200).json(updatedRetirement);
//     } else {
//       const newRetirement = new RetirementPlan({ ...req.body, userId });
//       const savedRetirement = await newRetirement.save();
//       res.status(201).json(savedRetirement);
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save retirement plan" });
//   }
// };

// const saveEmergencyFund = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const existingEmergencyFund = await EmergencyFund.findOne({ userId });

//     if (existingEmergencyFund) {
//       const updatedEmergencyFund = await EmergencyFund.findByIdAndUpdate(
//         existingEmergencyFund._id,
//         { $set: req.body },
//         { new: true }
//       );
//       res.status(200).json(updatedEmergencyFund);
//     } else {
//       const newEmergencyFund = new EmergencyFund({ ...req.body, userId });
//       const savedEmergencyFund = await newEmergencyFund.save();
//       res.status(201).json(savedEmergencyFund);
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save emergency fund" });
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

import AssetsAndInvestments from "../models/AssetsAndInvestments.model.js";
import ExpenseDetails from "../models/ExpenseDetails.model.js";
import IncomeDetails from "../models/IncomeDetails.model.js";
import InsuranceDetails from "../models/InsuranceDetails.model.js";
import LiabilitiesAndDebts from "../models/LiabilitiesAndDebts.model.js";
import RetirementPlan from "../models/RetirementPlan.model.js";
import EmergencyFund from "../models/EmergencyFund.model.js";

const saveData = async (req, res, Model, errorMessage) => {
  try {
    const userId = req.params.userId;
    const existingData = await Model.findOne({ userId });

    if (existingData) {
      const updatedData = await Model.findByIdAndUpdate(
        existingData._id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedData);
    } else {
      const newData = new Model({ ...req.body, userId });
      const savedData = await newData.save();
      res.status(201).json(savedData);
    }
  } catch (error) {
    res.status(500).json({ error: errorMessage || "Failed to save data" });
  }
};

const savePortfolio = async (req, res) => {
  saveData(req, res, AssetsAndInvestments, "Failed to save portfolio");
};

const saveExpenseDetails = async (req, res) => {
  saveData(req, res, ExpenseDetails, "Failed to save expenses");
};

const saveIncomeDetails = async (req, res) => {
  saveData(req, res, IncomeDetails, "Failed to save income");
};

const saveInsuranceDetails = async (req, res) => {
  saveData(req, res, InsuranceDetails, "Failed to save insurance");
};

const saveLiabilitiesAndDebts = async (req, res) => {
  saveData(req, res, LiabilitiesAndDebts, "Failed to save liabilities");
};

const saveRetirementPlan = async (req, res) => {
  saveData(req, res, RetirementPlan, "Failed to save retirement plan");
};

const saveEmergencyFund = async (req, res) => {
  saveData(req, res, EmergencyFund, "Failed to save emergency fund");
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