const express = require('express')
const  mongoose = require('mongoose')
const app = express()
const port = 3002
require('dotenv').config()
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser : true})


app.get('/', (req, res) => res.send('Welcome to our API'))

app.use('/user', authRouter)
app.use('/posts', userRouter)




app.listen(port, () => console.log(`Server listening on port ${port}`))