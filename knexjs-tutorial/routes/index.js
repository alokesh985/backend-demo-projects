const express = require("express");
const personController = require("../controller/person");
const userDetailsController = require("../controller/userDetails");
const getUserController = require("../controller/getUser");

const router = express.Router();

router.post("/person", personController.createPerson);
router.post("/add-user-details", userDetailsController.createUserDetails);
router.get("/get-user", getUserController.getUser);

module.exports = router;
