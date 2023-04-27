const taskController = require("../controllers/controller.task")

module.exports = (app) => {
    app.post("/api/:projectid/tasks", taskController.createTask)
    app.put("/api/tasks/:id", taskController.updateTask)
    app.delete("/api/tasks/:id", taskController.deleteTask)

    app.get("/api/tasks", taskController.getAllTasks)
    app.get("/api/tasks/:id", taskController.getOneTask)
}