const {CustomAPIError} = require('../custom-error/custom-error')

const errorHandler = (err,req, res, next) =>{
    // return res.status(500).json({msg:err})
    // console log coming from controller/tasks_2.js
    // console.log(err)
    // return res.status(err.status).json({msg:err.message})
    // return res.status(500).json({msg:`Something went wrong, try again`})

    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg:`Something went wrong, try again`})

}

module.exports = errorHandler