const mongoose = require('mongoose')


const employeeSchema =new mongoose.Schema({
    employeeId:{
        type:String,
        required:true,
        unique:true
    },
    employeename:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    joiningDate:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:String,
        type:true
    },
    salary:{
        type:Number,
        required:true
    },
    activeEmployee:{
        type:Boolean,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


const Employee = mongoose.model('Employee',employeeSchema)

module.exports = Employee