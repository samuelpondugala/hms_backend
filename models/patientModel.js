const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    _id: {
      type: String, // patient email
      ref: "User"
    },
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String
    },
    bloodGroup: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
