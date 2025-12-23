const Doctor = require("../models/doctorModel");

exports.createDoctor = async (req, res) => {
  await Doctor.create({
    _id: req.body.email,
    specialization: req.body.specialization,
    experience: req.body.experience,
    availableDays: req.body.availableDays,
    consultationFee: req.body.consultationFee
  });

  res.json({ msg: "Doctor added" });
};

exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

exports.getDoctorById = async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  res.json(doctor);
};

exports.updateDoctor = async (req, res) => {
  await Doctor.findByIdAndUpdate(req.params.id, req.body);
  res.json({ msg: "Doctor updated" });
};

exports.deleteDoctor = async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ msg: "Doctor removed" });
};
