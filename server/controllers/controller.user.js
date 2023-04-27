const User = require("../models/model.user")

// UPDATE
const updateUser = async (req, res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            {new: true, runValidators: true}
        )
        res.status(200).json(updatedUser)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// DELETE
const deleteUser = async (req, res) => {
    try{
        const deletedUser = await User.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json(deletedUser)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// GET ONE User
const getOneUser = async (req, res) => {
    try{
        const oneUser = await User.findById(
            req.params.id
        )
        res.status(200).json(oneUser)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// GET ALL UserS
const getAllUsers = async (req, res) => {
    try{
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = {updateUser, deleteUser, getOneUser, getAllUsers}