const express = require('express')
const authRouter = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')




authRouter.post('/register', async (req, res) => {

    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send('Email already exist')

    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.password, salt)


    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashpassword
    })
    user.save()
    res.send({ user })

})

authRouter.post('/login', async (req, res) => {

    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Email not found')

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Wrong password')

    const token = jwt.sign({user: user}, process.env.SECRET)
    res.header('auth-token', token)
    res.json(token)

})


module.exports = authRouter