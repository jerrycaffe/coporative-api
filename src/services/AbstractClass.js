const Error = require("../utils/ErrorUtils");

/**
 * abstract type services
 * @class
 */
class AbstractClass {
  /**
   * constructor
   * @param {*} model
  
   */
  constructor(model) {
    if (this.constructor === AbstractClass) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.DataModel = model;
  }

  /**
   * get all object
   * @returns {object} all data
   * @param {object} options
   */
  async getAll(options) {
    try {
      let dataList;
      if (options === undefined || typeof options !== "object") {
        dataList = await this.DataModel.findAll();
      } else {
        dataList = await this.DataModel.findAll({ ...options });
      }

      if (!dataList || !dataList.length) {
        throw new Error("Data Error", 404, "the required list does not exist");
      }
      return {
        success: true,
        data: dataList,
      };
    } catch (error) {
      return error;
    }
  }

  /**
   *  create user type
   * @param {*} data data
   * @returns {object} usertype
   */
  async create(data) {
    try {
      const { name } = data;
      const dataValue = await this.DataModel.findOne({
        where: { name },
      });
      if (dataValue) {
        throw new Error("Data Error", 409, `${this.DataModel} does  exist`);
      }
      const newDataValue = await this.DataModel.create(data);
      return {
        success: true,
        data: newDataValue,
      };
    } catch (error) {
      return error;
    }
  }

  /**
   *  create or find usertypedata by id, typename
   * @param {*} data
   * @return {object} usertype
   */
  async find(data) {
    try {
      const { id, name } = data;
      let dataValue;

      if (id) {
        dataValue = await this.DataModel.findByPk(id);
        return {
          success: true,
          data: dataValue,
        };
      }

      dataValue = await this.DataModel.findOne({
        where: { name },
      });

      if (!dataValue) {
        throw new Error("Data Error", 404, "record does not exist");
      }
      return {
        success: true,
        data: dataValue,
      };
    } catch (error) {
      return error;
    }
  }

  /**
   * update user type
   * @param {*} data
   * @return {object} usertype
   */
  async update(data) {
    try {
      const { id } = data;
      const dataValue = await this.DataModel.findByPk(id);

      if (!dataValue) {
        throw new Error("Data Error", 404, "record does not exist");
      }

      const updatedData = await this.DataModel.update(
        { ...data },
        { where: { id } }
      );
      if (updatedData) {
        const updatedDataValue = await this.DataModel.findByPk(id);
        return {
          success: true,
          data: updatedDataValue,
        };
      }
    } catch (error) {
      return error;
    }
  }
}

module.exports = AbstractClass;
