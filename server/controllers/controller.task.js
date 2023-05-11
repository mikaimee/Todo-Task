const Task = require("../models/model.task");
const Project = require("../models/model.project");

// CREATE
const createTask = async (req, res) => {

    const projectId = req.params.projectid;
    const newTask = new Task(req.body);

    try {
        const savedTask = await newTask.save()
        try{
            await Project.findByIdAndUpdate(projectId, {$push : {tasks: savedTask._id}})
        }
        catch (error){
            console.log(error)
        }
        res.status(200).json(savedTask)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// UPDATE
const updateTask = async (req, res) => {
    try{
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        )
        res.status(200).json(updatedTask)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// DELETE
const deleteTask = async (req, res) => {
    const projectId = req.params.projectid

    try{
        const preDeleteTask = await Task.findById (
            req.params.id
        )
        try{
            await Project.findByIdAndUpdate(projectId, {$pull: {tasks: preDeleteTask._id}})
        }
        catch(error) {
            console.log(error)
        }
        
        const deleteTask = await Project.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json({
            success: true,
            message: "successfully deleted on both user and projects model"
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// GET ONE TASK
const getOneTask = async(req, res) => {
    try{
        const oneTask = await Task.findById(
            req.params.id
        )
        res.status(200).json(oneTask)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// GET ALL TASKS
const getAllTasks = async (req, res) => {
    try{
        const allTasks = await Task.find()
        res.status(200).json(allTasks)
    }
    catch{
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getOneTask,
    getAllTasks
}