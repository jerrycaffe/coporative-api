const config = require("../config");
const { Permission, Role } = require("../models");
const RolesPermission = require("../services/rolesPermission");
const { displayError, handleSuccessResponse } = require("../utils");

const RolesPermissionInstance = new RolesPermission(Role);

exports.createRole = async (req, res, next) => {
  try {
    console.log(req.body);
    // const data = { ...req.body, userType: config.defaultUserType };
    // const results = await RolesPermissionInstance.createUser(data);
    // if (results instanceof Error) {
    //   return displayError(results, res, results.httpStatusCode);
    // }
    // return res.json(results).status(200);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
exports.getAllRoles = async (req, res, next) => {
  try {
    const roles = await RolesPermissionInstance.getAll({
      include: Permission,
    });
    return handleSuccessResponse(roles, "", res);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

// export const login = async (req, res, next) => {
//   try {
//     const results = await RolesPermissionInstance.authenticateUser(req.body);

//     if (results instanceof Error) {
//       return displayError(results, res, results.httpStatusCode);
//     }

//     return res.json(results).status(200);
//   } catch (error) {
//     return next(error);
//   }
// };
