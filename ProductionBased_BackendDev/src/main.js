
import dotenv from "dotenv"

// Importing the connectDB function from the db/index.js file. This function is used to connect to the MongoDB database.
import connectDB from "./db/index.js";

// Importing the Express application instance from the app.js file.
import { app } from "./app.js";

// Configuring dotenv to load the environment variables from the .env file.
dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    // If the connection is successful, the Express application starts listening on the port specified in the environment variables (or port 5000 if the PORT environment variable is not set).
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);

        // If there is an error with the Express application, it is logged to the console and thrown
        app.on('error', (error) => {
            console.log("ERROR: ", error);
            throw error   
        })   
    })
})
// If there is an error connecting to the MongoDB database, it is logged to the console
.catch((error) => console.log("MongoDB coonection Failed !!", error)
)

/* 

Summary for the above script :-
This script is typically used to start a Node.js server. It first connects to a MongoDB database, then starts an Express.js server to handle HTTP requests. The server listens on a port number specified in the environment variables, or port 5000 if no port number is specified. If there are any errors with the server or the database connection, they are logged to the console.

*/


/*

// This is the first approach we use to create connection

import express from "express"

const app = express()

// async await arrow function used in IIFI
;(async () => {
    try {   
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error", error);
            throw error

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);  
        })    
        })
    } catch (error) {
        console.error("ERROR", error);  
        throw error 
    }
})()
*/
