import mongoose from "mongoose";

const expensesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  housing: {
    type: Number,
    default: 0,
  },
  utilities: {
    type: Number,
    default: 0,
  },
  groceries: {
    type: Number,
    default: 0,
  },
  transportation: {
    type: Number,
    default: 0,
  },
  healthcare: {
    type: Number,
    default: 0,
  },
  education: {
    type: Number,
    default: 0,
  },
  entertainment: {
    type: Number,
    default: 0,
  },
  otherExpenses: {
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

const ExpenseDetails = mongoose.model("ExpenseDetails", expensesSchema);
export default ExpenseDetails;
