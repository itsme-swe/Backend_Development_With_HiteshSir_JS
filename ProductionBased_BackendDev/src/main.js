import mongoose from "mongoose";

// async await arrow function used in IIFI
; (async () => {
    try {   
        mongoose.connect(`${process.env.MONGODB_URI}`)
    } catch (error) {
        console.error("ERROR", error);  
        throw err  
    }
})()

