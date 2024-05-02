## Connection to MongoDB database
**1 -** Firstly we need to import mongoose, a popular Object Data Modeling (ODM) library for MongoDB, to interact with our MongoDB database.

    import mongoose from "mongoose";

    import { DB_NAME } from "./constrants";

**2 -** Now we'll be using IIFI to write our function to join the database and this is known to be the best practice used in industry.

Immediately Invoked Function Expression (IIFE) is used to ensure the database connection is established as soon as the script is executed.

    ; (async () => {

        try {
            mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        } catch (error) {

            console.error("ERROR", error);
            throw err       // Rethrowing the error 
        
    }
    })()