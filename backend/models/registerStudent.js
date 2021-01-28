const mongoose = require('mongoose')
const addStudentSchema = new mongoose.Schema({
    name:{type: String, required:true},
    password: {type: String, required:true},
    age: {type: String, required:true},
    date:{type: Date, default:Date.now()}
})

module.exports = mongoose.model(
    'studentTable', addStudentSchema 
)