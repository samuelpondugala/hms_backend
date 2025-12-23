const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  updateUser,
  deleteUser
} = require("../controllers/userController");

const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

router.get("/", auth, role("admin"), getAllUsers);
router.put("/:id", auth, role("admin"), updateUser);
router.delete("/:id", auth, role("admin"), deleteUser);

module.exports = router;
