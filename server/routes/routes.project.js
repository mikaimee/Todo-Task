const projectController = require("../controllers/controller.project")

module.exports = (app) => {
    app.post("/api/:userid/projects", projectController.createProject);
    app.put("/api/projects/:id", projectController.updateProject);
    app.delete("/api/:userid/projects/:id", projectController.deleteProject);

    app.get("/api/projects", projectController.getAllProjects);
    app.get("/api/projects/:id", projectController.getOneProject);
}