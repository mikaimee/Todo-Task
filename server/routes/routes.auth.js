const AuthController = require("../controllers/controller.auth")
const loginLimiter = require('../middleware/loginLimiter')

module.exports = app => {
    app.post("/api/register", AuthController.register);
    app.post("/api/login", loginLimiter, AuthController.login);
    app.get("/api/refresh", AuthController.refresh)
    app.post("/api/logout", AuthController.logout);
}