const express = require("express");
const user = require("../controller/Cuser");
const router = express.Router();

router.get("/", user.index);

router.get("/signup", user.signup);
router.post("/signup", user.signup);

router.get("/signin", user.signin);
router.post("/signin", user.signin);

router.post("/profile", user.profile);
router.patch("/profile/edit/:id", user.edit);
router.delete("/profile/delete/:id", user.delete);

module.exports = router;
