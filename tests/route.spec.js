const request = require("supertest");
const app = require("./app");

describe("Routes", () => {
  it("should return a 404 error if user inputs an incorrect route", (done) => {
    request(app)
      .get("/api/test")
      .end((err, res) => {
        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty(
          "message",
          "you have entered an incorrect route"
        );
        done();
      });
  });

  it("should return 200", (done) => {
    request(app)
      .get("/api/v1")
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res && typeof res === "object").toBe(true);
        done();
      });
  });
});
