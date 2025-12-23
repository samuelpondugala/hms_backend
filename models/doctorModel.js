const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    _id: {
      type: String, // doctor email
      ref: "User"
    },
    specialization: {
      type: String,
      required: true
    },
    experience: {
      type: Number, // years
      required: true
    },
    availableDays: {
      type: [String], // ["Monday", "Wednesday"]
      required: true
    },
    consultationFee: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
