"use strict";
const { Model } = require("sequelize");
const { Roles, Permissions } = require("../src/models/index");
module.exports = (sequelize, DataTypes) => {
  class Role_Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Role_Permission.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      permissionId: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: Permissions,
          key: "id",
        },
      },
      roleId: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: Roles,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "role_permission",
    }
  );
  return Role_Permission;
};
