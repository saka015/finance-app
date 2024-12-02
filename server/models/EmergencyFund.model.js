import mongoose from "mongoose";

const emergencyFundSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const EmergencyFund = mongoose.model("EmergencyFund", emergencyFundSchema);
export default EmergencyFund;
