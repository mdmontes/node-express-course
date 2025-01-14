const Task = require('../models/task')
const getAllTasks = async (req, res) => {
    // res.send('get All tasks')
    try {
        const task = await Task.find({});
        res.status(200).json({tasks });
        // res.status(200).json({tasks})
        // res.status(200).json({tasks, amount:tasks.length})
        // res.status(200).json({success:true, data:{ tasks, nbHits: tasks.length}})
        // res.status(200).json({status:"success", data:{ tasks, nbHits: tasks.length}})
    } catch (error) {
        res.status(500).json({msg:error});
    }    
}


const createTask = async (req, res) => {
    try {
        // console.log(req.body)
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg:error});    
    }
}


const getTask = async (req, res)  => {
    // res.json({id:req.params.id})
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if (!task){
            return res.status(404).json({msg: `No Task with id: ${taskID}`})}
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error});   
    }
}


const deleteTask = async (req, res) => {
    // res.send('delete task')
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if (!task){
            return res.status(404).json({msg: `No Task with id: ${taskID}`})}
        res.status(200).json({task})
        // res.status(200).send()
        // res.status(200).json({task:null, status:'success'})
    } catch (error) {
        res.status(500).json({msg:error});   
    }
}


const updateTask = async (req, res) => {
    // res.send('update task')
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new: true,
            // overwrite: true,
        })
        if (!task){
            return res.status(404).json({msg: `No Task with id: ${taskID}`})}
        // res.status(200).json({id:taskID, data:req.body})
        res.status(200).json({task})
    } catch (error) {
    res.status(500).json({msg:error})}
}

const editTask = async (req, res) => {
    // res.send('update task')
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new: true,
            overwrite: true,})
        if (!task){
            return res.status(404).json({msg: `No Task with id: ${taskID}`})}
        // res.status(200).json({id:taskID, data:req.body})
        res.status(200).json({task})
    } catch (error) {
    res.status(500).json({msg:error})}
}

module.exports ={ getAllTasks, getTask, createTask, updateTask, deleteTask, editTask }