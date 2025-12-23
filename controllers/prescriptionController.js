const Prescription = require("../models/prescriptionModel");

exports.createPrescription = async (req, res) => {
  await Prescription.create({
    patientId: req.body.patientEmail,
    doctorId: req.body.doctorEmail,
    diagnosis: req.body.diagnosis,
    medicines: req.body.medicines,
    notes: req.body.notes
  });

  res.json({ msg: "Prescription added" });
};

exports.getPrescriptionsByPatient = async (req, res) => {
  const data = await Prescription.find({ patientId: req.params.patientId });
  res.json(data);
};

exports.getPrescriptionsByDoctor = async (req, res) => {
  const data = await Prescription.find({ doctorId: req.params.doctorId });
  res.json(data);
};
