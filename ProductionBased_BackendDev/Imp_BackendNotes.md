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

## Node.js Exit Codes
In Node.js, exit codes are numerical values returned by a program when it finishes running. These codes serve as a way for the program to communicate its completion status to the operating system or calling process. Exit codes help indicate whether the program executed successfully or encountered an error during its execution.

**🔸Exit Code '0': Success -**  Meanig: The program executed successfully without any errors.

**🔸Exit Code '1': General Error -** Meaning:  Indicates that the program terminated due to an unspecified error.

If there is an unexpected problem in your code or an unhandled exception, the script might return an exit code of 1.

**🔸Exit Code '2': Misuse of Shell Builtins -** Meaning: Often signifies misuse or incorrect usage of built-in shell commands.

This code may be returned if there's an issue with how a command or shell functionality is used within the script.

**🔸Exit Code '3': Internal JavaScript Parse Error -** Meaning: Indicates a parsing error in the JavaScript code.

If there's a syntax error in your script that prevents the JavaScript engine from understanding the code, an exit code of 3 might be returned.

**🔸Exit Code '4': Internal JavaScript Evaluation Failure -** Meaning:  Denotes a failure in the evaluation of JavaScript code

This code could be returned if there's an issue during the execution of certain JavaScript operations or functions

**🔸Exit Code '5': Fatal Error -** Meaning: Represents a critical error that prevents the program from continuing.

If there's a severe issue that cannot be recovered during the execution of the script, it might return an exit code of 5.

