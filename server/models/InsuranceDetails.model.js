import mongoose from "mongoose";

const insuranceSchema = new mongoose.Schema({
  healthInsurance: { type: Number, default: 0 },
  lifeInsurance: { type: Number, default: 0 },
  homeInsurance: { type: Number, default: 0 },
  autoInsurance: { type: Number, default: 0 },
  otherInsurance: { type: Number, default: 0 },
});

const InsuranceDetails =
  mongoose.models.InsuranceDetails ||
  mongoose.model("InsuranceDetails", insuranceSchema);

export default InsuranceDetails;
