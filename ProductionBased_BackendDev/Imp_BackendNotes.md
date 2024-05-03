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

## Node Process Object 
The **process** object in Node.js is a global object that provides information about the current Node.js process, as well as methods to control and interact with it. It allows you to access information about the environment in which the process is running, such as environment variables, command-line arguments, and more. Here are some key properties and methods of the process object:

**process.argv:** An array containing the command-line arguments passed to the Node.js process. The first element is usually the path to the Node.js executable, and the second element is the path to the script being run.

**process.env :** An object containing the user environment variables. You can access environment variables using this property.

**process.exitCode :** A property that can be set to specify the exit status code of the process. When the process exits, this code will be returned to the operating system.

**process.cwd() :** A method that returns the current working directory of the Node.js process.

**process.pid :** A property containing the process ID (PID) of the Node.js process.

**process.platform :** A property containing a string identifying the operating system platform on which the Node.js process is running (e.g., "darwin" for macOS, "win32" for Windows).

**process.stdout and process.stderr :** Streams representing the standard output and standard error of the process, respectively.

**process.stdin :** A stream representing the standard input of the process.

**process.on(event, callback) :** A method to register event listeners for various events related to the process, such as 'exit', 'uncaughtException', 'SIGINT', etc.
