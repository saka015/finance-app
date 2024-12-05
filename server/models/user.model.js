import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  months: [
    {
      month: {
        type: String,
        enum: [
          "january",
          "february",
          "march",
          "april",
          "may",
          "june",
          "july",
          "august",
          "september",
          "october",
          "november",
          "december",
        ],
        required: true,
      },
      data: {
        assetsAndInvestments: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "AssetsAndInvestments",
        },
        expenseDetails: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ExpenseDetails",
        },
        incomeDetails: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "IncomeDetails",
        },
        insuranceDetails: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "InsuranceDetails",
        },
        liabilitiesAndDebts: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "LiabilitiesAndDebts",
        },
        retirementPlan: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "RetirementPlan",
        },
        emergencyFund: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "EmergencyFund",
        },
      },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
