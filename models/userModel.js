const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String, // email
      lowercase: true,
      trim: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["admin", "doctor", "receptionist", "patient"],
      required: true
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);
