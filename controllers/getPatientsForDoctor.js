const Appointment = require("../models/appointmentModel");
const User = require("../models/userModel");

exports.getPatientsForDoctor = async (req, res) => {
  const doctorId = req.params.doctorId;

  // Step 1: Find all confirmed appointments for this doctor
  const appointments = await Appointment.find({
    doctorId,
    status: { $in: ["confirmed", "completed"] }
  });

  // Step 2: Extract unique patient IDs
  const patientIds = [...new Set(appointments.map(a => a.patientId))];

  // Step 3: Get patient details
  const patients = await User.find({ _id: { $in: patientIds } });

  res.json(patients);
};
