const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"]
    },
    status: {
        type: [String],
        default: ["Ongoing"],
        required: [true, "Please provide a status"]
    },
    desc: {
        type: String,
        required: [true, "Please provide a description"]
    }
}, {timestamps: true})

module.exports = mongoose.model("Task", TaskSchema)
