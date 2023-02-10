const asyncWrapper = require('../middleware/async')
const Task = require('../models/task')
const {createCustomError} = require('../custom-error/custom-error')

const getAllTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({tasks:tasks});
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
})

const getTask = asyncWrapper( async (req, res, next)  => {
    // res.json({id:req.params.id})
    const {id:taskID} = req.params;
    const task = await Task.findOne({_id:taskID});
    if (!task){
        // const error = new Error('Not Found')
        // error.status = 404;
        // next(error) 
        // return
        
        // return res.status(404).json({msg: `No Task with id: ${taskID}`})

        return next(createCustomError(`No Task with id: ${taskID}`, 404))
        
    }
    res.status(200).json({task})
})

const deleteTask = asyncWrapper(async (req, res) => {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndDelete({_id:taskID});
    if (!task){
        return next(createCustomError(`No Task with id: ${taskID}`, 404))
    }
    res.status(200).json({task})
})

const updateTask = asyncWrapper(async (req, res) => {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndUpdate(
        {_id:taskID}, 
        req.body,{new: true,})
    if (!task){
        return next(createCustomError(`No Task with id: ${taskID}`, 404))}
    res.status(200).json({task})
})

const editTask = asyncWrapper(async (req, res) => {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
        new: true,
        overwrite: true,
        }
        )
    if (!task){
        return res.status(404).json({msg: `No Task with id: ${taskID}`})
        }
    res.status(200).json({task})
}) 

module.exports ={ getAllTasks, getTask, createTask, updateTask, deleteTask, editTask }