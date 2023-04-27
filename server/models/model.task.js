const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"]
    },
    status: {
        type: String,
        enum: [
            "ongoing",
            "inProgress",
            "completed",
            "cancelled"
        ],
        required: [true, "Please provide a status"]
    },
    desc: {
        type: String,
        required: [true, "Please provide a description"]
    }
}, {timestamps: true})

const Task = mongoose.model("Task", TaskSchema)
module.exports = Task;