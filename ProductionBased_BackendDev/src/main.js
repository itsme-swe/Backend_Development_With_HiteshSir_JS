import mongoose from "mongoose";

; (async () => {
    try {   
        mongoose.connect(`${process.env.MONGODB_URI}`)
    } catch (error) {
        console.error("ERROR", error);  
        throw err  
    }
})()

