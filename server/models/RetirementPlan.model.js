import mongoose from "mongoose";

const retirementPlanSchema = new mongoose.Schema({
  retirementSavings: { type: Number, default: 0 },
  pensionPlan: { type: Number, default: 0 },
  expectedRetirementAge: { type: Number, default: 0 },
  currentAge: { type: Number, default: 0 },
  monthlyContribution: { type: Number, default: 0 },
});

const RetirementPlan =
  mongoose.models.RetirementPlan ||
  mongoose.model("RetirementPlan", retirementPlanSchema);

export default RetirementPlan;
