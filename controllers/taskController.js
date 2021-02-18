const Task = require('../models/Task')
const tasks = require('../data/task')

const getTasks = (req, res)=>{
    Task.find()
    .exec((err,tasks)=> {
        if (err) return res.status(500).send(err.message);
        if (tasks.length === 0) return res.status(404).send("no tasks found");
        return res.status(200).send(tasks);
    })
}

const createTask = async (req, res) => {
    const task = req.body;
    await Task.create(task)
    .then(task => res.status(200).send(task))
    .catch(err => res.status(500).send(err.message))
    
   

};
const seedTasks = async(req, res) => {
    Task.create(tasks)
    .then(tasks => res.status(200).send(tasks))
    .catch(err => res.status(500).send(err.message))
    

}

const updateTask = async (req,res) => {

    const taskId = req.body.id;
    return Task.findByIdAndUpdate(taskId, {$set: req.body }, { new: true }, (err,task) => {
        if (err) return res.status(400).send(err.message);
        return res.status(200).send(task)
    })
}
module.exports = { createTask, seedTasks, updateTask, getTasks }