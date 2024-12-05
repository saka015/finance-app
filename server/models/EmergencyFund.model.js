import mongoose from "mongoose";

const emergencyFundSchema = new mongoose.Schema({
  amount: {
    type: Number,
    default: 0,
  },
  targetAmount: {
    type: Number,
    default: 0,
  },
  monthsOfExpenses: {
    type: Number,
    default: 0,
  },
});

const EmergencyFund =
  mongoose.models.EmergencyFund ||
  mongoose.model("EmergencyFund", emergencyFundSchema);

export default EmergencyFund;
