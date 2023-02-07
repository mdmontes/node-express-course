const express = require('express');
const router = express.Router();
const {getAllTasks, getTask, createTask, updateTask, deleteTask, editTask} =require('../controller/tasks_2')

// *** ROUTE is replicating all the request functions below
//app.get('/api/v1/tasks')          -get all the tasks
//app.post('/api/v1/tasks')         -create a new task
//app.get('/api/v1/tasks/:id')      -create a new task
//app.patch('/api/v1/tasks/:id')    -update a task
//app.delete('/api/v1/tasks/:id')   -delete a task

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask)

module.exports = router