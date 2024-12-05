import mongoose from "mongoose";

const assetsAndInvestmentsSchema = new mongoose.Schema({
  realEstate: { type: Number, default: 0 },
  stocksBonds: { type: Number, default: 0 },
  retirementAccounts: { type: Number, default: 0 },
  businessOwnership: { type: Number, default: 0 },
  savingsAccount: { type: Number, default: 0 },
  otherInvestments: { type: Number, default: 0 },
});

const AssetsAndInvestments =
  mongoose.models.AssetsAndInvestments ||
  mongoose.model("AssetsAndInvestments", assetsAndInvestmentsSchema);

export default AssetsAndInvestments;
