const express = require("express");
const rolePermission = require("../../controllers/rolesPermssion");

const router = express.Router();
router
  .route("/")
  .get(rolePermission.getAllRoles)
  .post(rolePermission.createRole);

module.exports = router;
