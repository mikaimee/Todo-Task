const jwt = require("jsonwebtoken")
const secret = process.env.SECRET_KEY


const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if(!token) {
        res.status(401).json({
            success: false,
            message: "You are not authenticated"
        })
    }

    jwt.verify(token, secret, (err, user) => {
        if(err) {
            res.status(401).json({
                verified: false,
                message: "Authentication error"
            })
        }
        req.user = user;
        next()
    })
}

const VerifyUser = (req, res, next) => {
    verifyToken (req, res, () => {
        if(req.user.id == req.params.id || req.user.isAdmin) {
            next()
        }
        else{
            res.status(403).json({
                verified: false,
                message: "Authentication error"
            })
        }
    })
}

const VerifyisAdmin = (req, res, next) => {
    verifyToken (req, res, () => {
        if(req.user.isAdmin) {
            next()
        }
        else{
            res.status(403).json({
                verified: false,
                message: "Authentication error"
            })
        }
    })
}

module.exports = {verifyToken, VerifyUser, VerifyisAdmin}