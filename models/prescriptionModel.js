const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema(
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
    diagnosis: {
      type: String,
      required: true
    },
    medicines: [
      {
        name: String,
        dosage: String,
        duration: String
      }
    ],
    notes: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prescription", prescriptionSchema);