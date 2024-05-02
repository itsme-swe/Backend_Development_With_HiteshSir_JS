/*  Importing mongoose, a popular Object Data Modeling (ODM) library for MongoDB, 
 to interact with our MongoDB database.*/

import mongoose from "mongoose";

/* Here we'll be using IIFI to write our function to join the database and this is the best practice.

Immediately Invoked Function Expression (IIFE) is used to ensure the database connection 
is established as soon as the script is executed.*/

; (async () => {
    try {
        // Establishing a connection to the MongoDB database using the MONGODB_URI environment variable.
        mongoose.connect(`${process.env.MONGODB_URI}`)
    } catch (error) {
        console.error("ERROR", error);
        // Rethrowing the error to prevent the script from continuing execution.
        throw err
        
    }
})()

