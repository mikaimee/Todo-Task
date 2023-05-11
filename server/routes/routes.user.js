const userController = require("../controllers/controller.user")

module.exports = (app) => {

    app.put("/api/users/:id", userController.updateUser)
    app.delete("/api/users/:id", userController.deleteUser)
    app.get("/api/users/:id", userController.getOneUser)
    app.get("/api/users", userController.getAllUsers)
}