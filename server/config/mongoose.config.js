const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pm", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to pm database"))
.catch(err => console.log("Failed to connect to database", err));