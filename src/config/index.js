const dotenv = require("dotenv");

dotenv.config();

const config = {
  dev_db_Url: process.env.DATABASE_URL_DEVELOPMENT,
  db_Url: process.env.DATABASE_URL,
  port: process.env.PORT || 8000,
  env: process.env.NODE_ENV || "development",
  logDir: process.env.LOGDIR || "logs",
  tokenExpiry: process.env.TOKEN_EXPIRY,
  secret: process.env.SECRET,
  defaultUserType: process.env.DEFAULT_USER_TYPE,
  defaultAdminType: process.env.DEFAULT_ADMIN_TYPE,
  sessionSecret: process.env.SESSION_SECRET,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  callbackURL: process.env.AUTH0_CALLBACK_URL,
  domain: process.env.AUTH0_DOMAIN,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  adminChannelId: process.env.ADMIN_CHANNEL_ID,
};
module.exports = config;
