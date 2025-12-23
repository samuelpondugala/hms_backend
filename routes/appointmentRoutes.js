const express = require("express");
const router = express.Router();

const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
} = require("../controllers/appointmentController");

const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

// Book appointment
router.post(
  "/",
  auth,
  role("admin", "receptionist", "patient"),
  createAppointment
);

// View appointments
router.get(
  "/",
  auth,
  role("admin", "receptionist", "doctor", "patient"),
  getAppointments
);

router.get("/:id", auth, getAppointmentById);

// Update status
router.put(
  "/:id",
  auth,
  role("admin", "receptionist", "doctor"),
  updateAppointment
);

router.delete(
  "/:id",
  auth,
  role("admin", "receptionist"),
  deleteAppointment
);

module.exports = router;
