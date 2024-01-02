const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Todo = new Schema({
    title : {
        type : String,
    },
    state : {
        type : Boolean,
        default: false,
    },
    date : {
        type : Date,
    }
});



module.exports = Todo;