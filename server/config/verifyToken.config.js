const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;

    if(!token) {
        res.status(401).json({
            success: false,
            message: "You are not authenticated"
        })
    }

    jwt.verify(
        token, 
        process.env.ACCESS_TOKEN_SECRET, 
        (err, decoded) => {
            if(err) {
                res.status(401).json({
                    verified: false,
                    message: "Authentication error"
                })
            }
            req.decoded = decoded.UserInfo.email;
            req.isAdmin = decoded.UserInfo.isAmind
            next()
        }
    )
}

module.exports = verifyToken
