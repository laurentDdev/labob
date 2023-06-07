const jwt = require('jsonwebtoken')
const jwtMiddleware = async (req,res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1]

    return jwt.verify(token,process.env.JWT_SECRET, (err,payload) => {
        if (err) return  res.sendStatus(401)

        next()

    })
}

module.exports = jwtMiddleware
