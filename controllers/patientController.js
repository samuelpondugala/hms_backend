const Patient = require("../models/patientModel");

exports.createPatient = async (req, res) => {
  await Patient.create({
    _id: req.body.email,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    phone: req.body.phone,
    address: req.body.address,
    bloodGroup: req.body.bloodGroup
  });

  res.json({ msg: "Patient registered" });
};

exports.getPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};

exports.getPatientById = async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  res.json(patient);
};

exports.updatePatient = async (req, res) => {
  await Patient.findByIdAndUpdate(req.params.id, req.body);
  res.json({ msg: "Patient updated" });
};

exports.deletePatient = async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ msg: "Patient removed" });
};
