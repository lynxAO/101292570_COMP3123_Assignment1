const mongoose = require('mongoose')

const UserSchema = new mongoose.schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    username:{
        type: String,
        maxLength: 100,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9]+$/
    },
    email:{
        type: String,
        maxLength: 50,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", UserSchema);