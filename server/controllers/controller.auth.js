const authModel = require("../models/model.user");
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET_KEY
const bcrypt = require("bcrypt")

const register = async (req, res) => {
    const {firstName, lastName, email, password} = req.body
    try{
        const user = await authModel.create({
            firstName,
            lastName,
            email,
            password
        });
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin, email: user.email, firstName: user.firstName, lastName: user.lastName}, SECRET)
        res.cookie("accessToken", token, {httpOnly: true})
        .json({
            success: true,
            user: user
        })
    }
    catch (error){
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
};

const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(400).json({
            success: false,
            error: "Please provide an email or password"
        })
    }
    try{
        const user = await authModel.findOne({email: req.body.email})
        if(!user) {
            res.status(404).json({
                success: false,
                error: "Invalid credentials"
            })
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword) {
            res.status(400).json({
                success: false,
                error: "Invalid credentials"
            })
        }
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, SECRET)

        const {password, isAdmin, ...otherInfo} = user._doc
        res.cookie("accessToken", token, {
            httpOnly: true
        }).status(200).json({...otherInfo})
    }
    catch (error){
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const logout = async (req, res) => {
    res.clearCookie("accessToken")
    res.json({success: "Successfully logged out"})
}

module.exports = {register, login, logout}