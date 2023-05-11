const authModel = require("../models/model.user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const asyncHandler = require('express-async-handler')

const register = async (req, res) => {
    const {firstName, lastName, email, password} = req.body

    try{
        // Confirm data
        if (!email || !password || !firstName || !password) {
            return res.status(400).json({message: 'All fields are required'})
        }

        // Check for Duplicate
        const duplicate = await authModel.findOne({ email }).collation({locale: 'en', strength: 2}).lean().exec()
        if (duplicate) {
            return res.status(409).json({message: 'Email is already taken'})
        }

        // Create new user with access token
        const user = await authModel.create({
            firstName,
            lastName,
            email,
            password
        });
        const accessToken = jwt.sign({
            id: user._id, 
            isAdmin: user.isAdmin, 
            email: user.email, 
            firstName: user.firstName, 
            lastName: user.lastName
        }, process.env.ACCESS_TOKEN_SECRET)
        res.cookie("accessToken", accessToken, {httpOnly: true})
        .json({
            accessToken,
            user: user
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
};

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // If email or password is not provided
    if(!email || !password) {
        return res.status(400).json({message: 'Please provide an email or password'})
    }

    try{
        const foundUser = await authModel.findOne({ email }).exec()

        if(!foundUser) return res.status(401).json({message: 'Unauthorized'})

        // If the password does not match
        const validPassword = await bcrypt.compare(password, foundUser.password)
        if(!validPassword) return res.status(401).json({message: 'Unauthorized'})

        const accessToken = jwt.sign (
            {
                "UserInfo" : {
                    "email": foundUser.email,
                    "isAdmin": foundUser.isAdmin
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m'}
        )

        const refreshToken = jwt.sign(
            {"email": foundUser.email},
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d'}
        )

        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.json({
            accessToken,
            message: "You have successfully logged in"
        })
    }

    catch (error){
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})

const refresh = (req, res) => {
    const cookies = req.cookies
    
    if (!cookies.jwt) return res.status(401).json({message: 'Unauthorized'})

    const refreshToken = cookies.jwt

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        asyncHandler(async (err, decoded) => {
            if (err) return res.status(403).json({message: 'Forbidden'})

            const foundUser = await authModel.findOne({ email: decoded.email }).exec()

            if (!foundUser) return res.status(401).json({message: 'Unauthorized'})

            const accessToken = jwt.sign(
                { 
                    "UserInfo": {
                        "email": foundUser.email,
                        "isAdmin": foundUser.isAdmin
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '15m'}
            )
            res.json({accessToken})
        })
    )
}



const logout = async (req, res) => {
    res.clearCookie("accessToken", {
        httpOnly: true,
        sameSite: 'None', 
        secure: true
    })
    res.json({success: "Successfully logged out"})
}
module.exports = {register, login, logout, refresh}
