import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
    {
        content: {
            typeof: String,
            required: true
        },

        complete: {
            typeof: Boolean,
            default: false
        },

        // The user who created the todo item (reference to User model)
        createBy: {
            typeof: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        
        // Array of sub-todo items (references to SubTodo model)
        subTodos: [
            {
                typeof: mongoose.Schema.Types.ObjectId,
                ref: 'SubTodo'
            }
        ] 
    }, {timestamps:true})

export const Todo = mongoose.model("Todo", todoSchema)