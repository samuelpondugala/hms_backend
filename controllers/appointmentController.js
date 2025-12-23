const Appointment = require("../models/appointmentModel");

exports.createAppointment = async (req, res) => {
  await Appointment.create({
    patientId: req.body.patientEmail,
    doctorId: req.body.doctorEmail,
    date: req.body.date,
    time: req.body.time
  });

  res.json({ msg: "Appointment booked" });
};

exports.getAppointments = async (req, res) => {
  const data = await Appointment.find();
  res.json(data);
};

exports.getAppointmentById = async (req, res) => {
  const appt = await Appointment.findById(req.params.id);
  console.log(req.params, appt)
  res.json(appt);
};

exports.updateAppointment = async (req, res) => {
  await Appointment.findByIdAndUpdate(req.params.id, req.body);
  res.json({ msg: "Appointment updated" });
};

exports.deleteAppointment = async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ msg: "Appointment cancelled" });
};
