const Task = require('../model/Task')

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const getTask = async (req, res) => {
    try {
        const { id: TaskId } = req.params
        const task = await Task.findOne({ _id: TaskId })
        if(!task){
            return res.status(401).json({msg:'no task found with this id'})
        }
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
const updateTask = (req, res) => {
    res.send('update task')
}
const deleteTask = async (req, res) => {
    try {
        const { id: TaskId } = req.params
        const task = await Task.findOneAndDelete({ _id: TaskId })
        if(!task){
            return res.status(401).json({msg:'no task found with this id'})
        }
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
module.exports = {
    getTask,
    createTask,
    updateTask,
    getAllTasks,
    deleteTask
}