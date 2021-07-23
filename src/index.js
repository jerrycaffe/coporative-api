/* eslint-disable no-new */
const Sequelize = require("sequelize");
const ExpressLoader = require("./loaders/Express");
const configuration = require("./config/config");

const env = process.env.NODE_ENV || "development";
const config = configuration[env];

const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("DB connected successfully");
    // logger.info('Connection to DB has been established successfully.');
    new ExpressLoader();
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    // logger.error('Unable to connect to the database:', err);
  });
