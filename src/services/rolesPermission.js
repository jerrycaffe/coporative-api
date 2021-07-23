const model = require("../models");
const AbstractClass = require("./AbstractClass");

const { Role } = model;
/**
 * @class RolesPermission
 * @extends {AbstractClass}
 */
class RolesPermission extends AbstractClass {
  /**
   * initiate
   * @param {*} Subject model
   */
  constructor() {
    super();
    this.DataModel = Role;
  }
}

module.exports = RolesPermission;
