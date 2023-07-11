const express = require("express");
const router = express.Router();

router.route("/login", authUser);
router.route("/").post(registerUser);
module.exports = router;
