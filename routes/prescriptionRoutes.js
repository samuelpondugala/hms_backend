const express = require("express");
const router = express.Router();

const {
  createPrescription,
  getPrescriptionsByPatient,
  getPrescriptionsByDoctor
} = require("../controllers/prescriptionController");

const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");
const { getPatientsForDoctor } = require("../controllers/getPatientsForDoctor");

// Doctor writes prescription
router.post(
  "/",
  auth,
  role("doctor"),
  createPrescription
);

// Patient views prescriptions
router.get(
  "/patient/:patientId",
  auth,
  role("patient", "doctor"),
  getPrescriptionsByPatient
);

// Doctor views own prescriptions
router.get(
  "/doctor/:doctorId",
  auth,
  role("doctor"),
  getPrescriptionsByDoctor
);

router.get(
  "/doctor/:doctorId/patients",
  auth,
  role("doctor"),
  getPatientsForDoctor
);


module.exports = router;
