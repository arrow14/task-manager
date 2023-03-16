const express = require('express')
const router = express.Router();
const {getAllTask,getSingleTask,createTask,updateTask,deleteTask} = require('../controllers/controller')

router.get('/',getAllTask)
router.post('/',createTask)
router.get('/:id',getSingleTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports = router