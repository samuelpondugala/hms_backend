const express = require("express");
const router = express.Router();

const {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient
} = require("../controllers/patientController");

const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

// Receptionist / Admin
router.post("/", auth, role("admin", "receptionist"), createPatient);
router.get("/", auth, role("admin", "receptionist", "doctor"), getPatients);
router.get("/:id", auth, getPatientById);
router.put("/:id", auth, role("admin", "receptionist"), updatePatient);
router.delete("/:id", auth, role("admin"), deletePatient);

module.exports = router;
