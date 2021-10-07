const mongoose = require('mongoose')

const User = mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 3
    },
    email : {
        type : String,
        required : true,
        min : 3
    },
    password : {
        type : String,
        required : true,
        min : 3,
        max : 25
    }
})

module.exports = mongoose.model('User', User)