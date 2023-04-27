const Project = require("../models/model.project")
const User = require('../models/model.user')

// CREATE
const createProject = async( req, res ) => {

    const userId = req.params.userid
    const newProject = new Project(req.body)

    try {
        const savedProject = await newProject.save()
        try{
            await User.findByIdAndUpdate(userId, {$push: {projects: savedProject._id}})
        }
        catch (error){
            console.log(error)
        }
        res.status(200).json(savedProject)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

//UPDATE
const updateProject = async (req, res) => {
    try{
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true, runValidators: true}
        )
        res.status(200).json(updatedProject)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// DELETE
const deleteProject = async (req, res) => {

    const userId = req.params.userid

    try{
        const preDeleteProject = await Project.findById (
            req.params.id
        )
        try{
            await User.findByIdAndUpdate(userId, {$pull: {projects: preDeleteProject._id}})
        }
        catch(error) {
            console.log(error)
        }
        
        const deleteProject = await Project.findByIdAndDelete(
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
    // try{
    //     const deleteProject = await Project.findByIdAndDelete(
    //         req.params.id
    //     )
    //     res.status(200).json({
    //         success: true,
    //         message: "Successfully deleted"
    //     })
    // }
    // catch (error) {
    //     res.status(500).json({
    //         success: false,
    //         error: error.message
    //     })
    // }
}

// GET ONE PROJECT
const getOneProject = async (req, res) => {
    try{
        const oneProject = await Project.findById(
            req.params.id
        )
        res.status(200).json(oneProject)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}


// GET ALL PROJECTS
const getAllProjects = async(req, res) => {
    try{
        const allProjects = await Project.find()
        res.status(200).json(allProjects)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = {
    createProject,
    updateProject,
    deleteProject,
    getOneProject,
    getAllProjects
}