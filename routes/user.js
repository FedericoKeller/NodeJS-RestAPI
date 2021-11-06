const express = require("express");

const router = express.Router();
const userController = require("../controllers/user");
const isAuth = require("../middleware/auth");

router.get("/status", isAuth, userController.getUserStatus);

router.put("/status", isAuth, userController.updateUserStatus);


module.exports = router;