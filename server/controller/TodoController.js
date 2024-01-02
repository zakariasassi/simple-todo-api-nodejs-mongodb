const TodoModel = require('../model/TodoModel');




exports.create = async (req , res ) => {
    try {
        const title = req.body.title;
        if(!title){
            return res.json({
                msg : "Please select a title",
                state : 0,
                data : [],
            })
        }
    
        await TodoModel.create({
            title: title,
            date : new Date()
        }).then((data) => {
            res.json({
                msg : "Todo created successfully",
                state : 1,
                data : data
            })
        }).catch((err) => {
            console.log(err)
            res.json({
                msg : "Internal Server Error"  + err,
                state : 0,
                data : []
            })
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg : "Internal Server Error"  + err,
            state : 0,
            data : []
        })
    }
    
}
exports.getall = async (req , res ) => {
     try {
        const todos = await TodoModel.find();
        if(todos){
            return res.json({
                msg : "",
                state : 1,
                data : todos
            })
        }

         res.json({
            msg : "Cant find any tasks or somthing not work ",
            state : 1,
            data : todos
        })
     } catch (error) {
        console.log(error)
        res.json({
            msg : "Internal Server Error",
            state : 1,
            data : []
        })
     }
        
}
exports.getbyid = async (req , res ) => {

    try {
        const todo = await TodoModel.findById(req.params.id);
        if(todo){
            return res.json({
                msg : "",
                state : 1,
                data : todo
            })
        }

        res.json({
            msg : "Cant find any task ",
            state : 1,
            data : todo
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg : "Internal Server Error",
            state : 1,
            data : []
        })
    }
}
exports.update = async (req , res ) => {

    try {
        await TodoModel.findOneAndUpdate({_id : req.params.id}, 
            {state : true} ).then(() => {
            res.json({
                msg : "Task updated successfully",
                state: 1,
                date : []
            })
        }).catch(error => {
            console.log(error)
            res.json({
                msg : "Internal server",
                state : 0,
                data : []
            })
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg : "Internal server",
            state : 0,
            data : []
        })
    }

}
exports.delete = async (req , res ) => {
    try {
        await TodoModel.findOneAndDelete({_id : req.params.id}).then(() => {
            res.json({
                msg : "Task deleted successfully",
                state: 1,
                date : []
            })
        }).catch(error => {
            console.log(error)
            res.json({
                msg : "Internal server",
                state : 0,
                data : []
            })
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg : "Internal server",
            state : 0,
            data : []
        })
    }
}