const userController = require("../controllers/controller.user")
const verifications = require("../config/verifyToken.config")

module.exports = (app) => {

    app.get("/authenticationCheck", verifications.verifyToken, (req, res, next) => {
        res.send("hello user, you are logged in")
    })
    app.get("/userCheck/:id", verifications.VerifyUser, (req, res, next) => {
        res.send("hello user, you are logged in and have authentication to delete account")
    })
    app.get("/adminCheck/:id", verifications.VerifyisAdmin, (req, res, next) => {
        res.send("hello admin, you are logged in and have authentication to all accounts")
    })

    app.put("/api/users/:id", verifications.VerifyUser, userController.updateUser)
    app.delete("/api/users/:id", verifications.VerifyUser, userController.deleteUser)
    app.get("/api/users/:id", verifications.VerifyUser, userController.getOneUser)
    app.get("/api/users", verifications.VerifyisAdmin, userController.getAllUsers)
}