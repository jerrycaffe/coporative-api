const v1RoutesList = require("./v1");

const routes = (app) => {
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, content-type, x-access-token, authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.removeHeader("X-Powered-By");
    next();
  });
  // you can do versioning
  app.use("/api/v1/", v1RoutesList);
};

module.exports = routes;
