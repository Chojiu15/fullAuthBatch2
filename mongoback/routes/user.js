const userRouter = require('express').Router()
const verify = require('../routes/verifyToken')

userRouter.get('/', verify, (req, res) => {
    res.json(req.user)
})


module.exports = userRouter