const express = require('express');
const router  = express.Router();

const TodoController = require('../controller/TodoController')


router.post('/create', TodoController.create )
router.get('/getall', TodoController.getall )
router.get('/getbyid/:id', TodoController.getbyid )
router.put('/update/:id', TodoController.update )
router.delete('/delete/:id', TodoController.delete )



module.exports = router