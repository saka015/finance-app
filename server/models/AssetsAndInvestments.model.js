import mongoose from "mongoose";

const assetsSchema = new mongoose.Schema({
  userId: {
    // Assuming you have a User model and want to associate assets with a user
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  realEstate: {
    type: Number,
    default: 0, //default value if not provided
  },
  stocksBonds: {
    type: Number,
    default: 0,
  },
  retirementAccounts: {
    type: Number,
    default: 0,
  },
  businessOwnership: {
    type: Number,
    default: 0,
  },
  savingsAccount: {
    type: Number,
    default: 0,
  },
  otherInvestments: {
    type: Number,
    default: 0,
  },
  createdAt: {
    //Adding timestamps is a best practice.
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const AssetsAndInvestments = mongoose.model(
  "AssetsAndInvestments",
  assetsSchema
);
export default AssetsAndInvestments;
