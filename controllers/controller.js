
const Task = require('../models/models')

const getAllTask = async(req,res)=>{
    try {
        const tasks = await new Task.find({})
        res.status(200).json({ tasks})
    } catch (error) {
        res.status(500).json({message:error})
        console.log(error)
    }
    
}

const createTask = async(req,res)=>{
    try {
        const task = await Task.create(req.body)    
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({message:error})
        console.log(error)
    }
   
}

const getSingleTask =async (req,res)=>{
    try {
        const {ID:tasksid} = req.params
        const task = await new Task.findOne({_ID:tasksid})
        if(!task){
            return res.status(404).json({message:`task with id ${tasksid}`})
        }
        res.status(200).json({success:true,message:`the task with the id ${taskdid} has been succefully updated`})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const updateTask = (req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        })
        return res.status(200).json({task})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const deleteTask = async (req,res)=>{
    try {
        const {ID:tasksid} = req.params
        const task = await new Task.findOneAndDelete({_ID:tasksid})
        if(!task){
            return res.status(404).json({message:`task with id ${tasksid}`})
        }
        res.status(200).json({success:true,message:`the task with the id ${tasksid} has been deleted`})
    } catch (error) {
        res.status(500).json({message:error})
    }
    
}

module.exports = {
    getAllTask,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
}