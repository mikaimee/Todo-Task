const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for your project"]
    },
    desc: {
        type: String,
        required: [true, "Please provide a description"]
    },
    tasks: [String]
})

module.exports = mongoose.model("Project", ProjectSchema)