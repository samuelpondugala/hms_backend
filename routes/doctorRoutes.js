const express = require("express");
const router = express.Router();

const {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
} = require("../controllers/doctorController");

const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

// Admin manages doctors
router.post("/", auth, role("admin"), createDoctor);
router.get("/", auth, getDoctors);
router.get("/:id", auth, getDoctorById);
router.put("/:id", auth, role("admin"), updateDoctor);
router.delete("/:id", auth, role("admin"), deleteDoctor);

module.exports = router;
