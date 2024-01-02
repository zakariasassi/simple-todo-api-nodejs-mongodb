const mongoose = require('mongoose');
const Todo = require('../schema/Todo');


const TodoModel = mongoose.model("Todos" , Todo );


module.exports = TodoModel;