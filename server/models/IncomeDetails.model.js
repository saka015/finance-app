import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  salary: {
    type: Number,
    default: 0,
  },
  businessIncome: {
    type: Number,
    default: 0,
  },
  rentalIncome: {
    type: Number,
    default: 0,
  },
  dividends: {
    type: Number,
    default: 0,
  },
  otherSources: {
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

const IncomeDetails = mongoose.model("IncomeDetails", incomeSchema);
export default IncomeDetails;
