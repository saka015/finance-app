import mongoose from "mongoose"

const retirementPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  retirementSavings: {
    type: Number,
    default: 0,
  },
  pensionPlan: {
    type: Number,
    default: 0,
  },
  expectedRetirementAge: {
    type: Number,
    default: 0,
  },
  currentAge: {
    type: Number,
    default: 0,
  },
  monthlyContribution: {
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

const RetirementPlan = mongoose.model("RetirementPlan", retirementPlanSchema);
export default RetirementPlan;
