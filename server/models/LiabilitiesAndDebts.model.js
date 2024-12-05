import mongoose from "mongoose";

const liabilitiesSchema = new mongoose.Schema({
  mortgage: { type: Number, default: 0 },
  studentLoans: { type: Number, default: 0 },
  personalLoans: { type: Number, default: 0 },
  creditCardDebt: { type: Number, default: 0 },
  autoLoans: { type: Number, default: 0 },
  otherLiabilities: { type: Number, default: 0 },
});

const LiabilitiesAndDebts =
  mongoose.models.LiabilitiesAndDebts ||
  mongoose.model("LiabilitiesAndDebts", liabilitiesSchema);

export default LiabilitiesAndDebts;
