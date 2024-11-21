const Task = require('../model/Task')
const asyncWrapper = require('../middleware/asyncWrapper')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body)
    res.status(201).json({ task })
})
const getTask = asyncWrapper(async (req, res) => {

    const { id: TaskId } = req.params
    const task = await Task.findOne({ _id: TaskId })
    if (!task) {
        return res.status(401).json({ msg: 'no task found with this id' })
    }
    res.status(201).json({ task })


})
const updateTask = asyncWrapper(async (req, res) => {

    const { id: TaskId } = req.params
    const task = await Task.findOneAndUpdate({ _id: TaskId }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return res.status(401).json({ msg: 'no task found with this id' })
    }
    res.status(201).json({ task: task })


})
const deleteTask = asyncWrapper(async (req, res) => {

    const { id: TaskId } = req.params
    const task = await Task.findOneAndDelete({ _id: TaskId })
    if (!task) {
        return res.status(401).json({ msg: 'no task found with this id' })
    }
    res.status(201).json({ task })

})
module.exports = {
    getTask,
    createTask,
    updateTask,
    getAllTasks,
    deleteTask
}