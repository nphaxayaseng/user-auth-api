const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    userId: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    isComplete: {
        type: Boolean,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = Task = mongoose.model("task", TaskSchema);