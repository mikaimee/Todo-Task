const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide a firstName"]
    },
    lastName: {
        type: String,
        required: [true, "Please provide a lastName"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        match: [
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            "Please provide a valid email"
        ]
    },

    password: {
        type: String,
        required: [true, "Please provide a passord"],
        minLength: [8, "Password must be 8 characters or more"]
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    projects: [String],

    role: {
        type: String
    },

    profilePic: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    }
}, {timestamps: true});

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model("User", userSchema)
