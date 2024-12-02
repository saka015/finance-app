import mongoose from "mongoose";

const liabilitiesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  mortgage: {
    type: Number,
    default: 0,
  },
  studentLoans: {
    type: Number,
    default: 0,
  },
  personalLoans: {
    type: Number,
    default: 0,
  },
  creditCardDebt: {
    type: Number,
    default: 0,
  },
  autoLoans: {
    type: Number,
    default: 0,
  },
  otherLiabilities: {
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

const LiabilitiesAndDebts = mongoose.model(
  "LiabilitiesAndDebts",
  liabilitiesSchema
);
export default LiabilitiesAndDebts;
