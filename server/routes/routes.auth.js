const AuthController = require("../controllers/controller.auth")

module.exports = app => {
    app.post("/api/register", AuthController.register);
    app.post("/api/login", AuthController.login);
    app.get("/api/logout", AuthController.logout);
}