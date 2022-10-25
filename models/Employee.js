const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    first_name:{
        type: String,
        maxLength: 100,
        required: true,
        match: /^[a-zA-Z]+$/
    },
    last_name:{
        type: String,
        maxLength: 50,
        required: true,
        match: /^[a-zA-Z]+$/
    },
    email:{
        type: String,
        maxLength: 50,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    gender:{
        type: String,
        maxLength: 25,
        required: true,
        enum: "Male" || "Female" || "Other"
    },
    salary:{
        type: mongoose.Types.Decimal128,
        required: true
    }
})


module.exports = mongoose.model("Employee", EmployeeSchema);