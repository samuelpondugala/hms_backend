const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
      ref: "Patient",
      required: true
    },
    doctorId: {
      type: String,
      ref: "Doctor",
      required: true
    },
    date: {
      type: Date,
      default: Date.now(),
      required: true
    },
    time: {
      type: String,
      timestamps:true,
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
