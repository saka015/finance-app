import mongoose from "mongoose";

const expensesSchema = new mongoose.Schema({
  housing: { type: Number, default: 0 },
  utilities: { type: Number, default: 0 },
  groceries: { type: Number, default: 0 },
  transportation: { type: Number, default: 0 },
  healthcare: { type: Number, default: 0 },
  education: { type: Number, default: 0 },
  entertainment: { type: Number, default: 0 },
  otherExpenses: { type: Number, default: 0 },
});

const ExpenseDetails =
  mongoose.models.ExpenseDetails ||
  mongoose.model("ExpenseDetails", expensesSchema);

export default ExpenseDetails;
