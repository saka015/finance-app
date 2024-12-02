import mongoose from "mongoose";

const insuranceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  healthInsurance: {
    type: Number,
    default: 0,
  },
  lifeInsurance: {
    type: Number,
    default: 0,
  },
  homeInsurance: {
    type: Number,
    default: 0,
  },
  autoInsurance: {
    type: Number,
    default: 0,
  },
  otherInsurance: {
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

const InsuranceDetails = mongoose.model("InsuranceDetails", insuranceSchema);
export default InsuranceDetails;
