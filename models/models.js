const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    task:String,
    completed:Boolean,
})

module.exports = mongoose.model('task',TaskSchema)