const express = require("express");
const rolesPermission = require("./rolesPermission");
// const userTypeRoute = require("./userType");
// const serviceRoute =require("./service");

const router = express.Router();

router.use("/roles", rolesPermission);
// router.use("/usertype", userTypeRoute);
// router.use("/service", serviceRoute);
router.all("/", (req, res) => {
  res.send({ message: "Hello from templates!" });
});

module.exports = router;
