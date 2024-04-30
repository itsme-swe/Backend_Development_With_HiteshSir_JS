# 1. Directory Structure
**🔸Src -** Entry Point of of every app. Mojorly comprises three files:

    1. index.js -- Here we'll connecting our DB

    2. app.js -- config_files, cookies etc

    3. constants -- enums, DB_Name

**🔸DataBase -** In this we  keep actual code which connect to DB

**🔸Models -** Here we'll be defining structure/schema of our data 

**🔸Controllers -** Controller will control all the functions or methods which will process data

**🔸Routes -**

**🔸Middlewares -**

**🔸Utils -** All the necessary files which will help to upload files or to send some emails etc.

**🔸More(Depends) -**

# dotenv Package
dotenv is a popular npm package used in Node.js applications to manage environment variables conveniently. By using the dotenv package, you can keep sensitive configuration information separate from your codebase and easily manage different environment configurations for development, testing, and production environments.

**1. Installation :** First, you need to install the dotenv package via npm. You can do this by running the following command in your terminal:

    # Install locally (recommended)

    npm install dotenv --save 

**2. Creating the .env File :** Create a file named ".env" in the root directory of your Node.js project.  This file will contain your environment variables in the format key=value. For example:
    
    PORT = 3000
    DB_HOST = localhost
    DB_USER = admin

**3. Loading Environment Variables :** In your Node.js application entry point (e.g., index.js), require and configure dotenv at the top of the file. This typically happens before any other code that accesses the environment variables:

    require('dotenv').config()

    This line will load the environment variables from the .env file into the process.env object.

**4. Accessing Environment Variables :** Now we can access environment variables anywhere in our application using the **process.env** Object.

    app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
    })

# Creating Server
    require('dotev').config()
    const express = require('express')

    const app = express()

    const port = 4000

    app.get('/', (req, res) => {
        res.send('Hello World')
    })

    app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
    })

    
**➡️ 'require( )' Function -**  The require() function is typically used in environments like Node.js for including modules. It allows you to load modules and their functionality into your current file. The require() function takes a module name or path as an argument and returns the exports of the requested module.

    // Using require() to import the 'fs' (file system) module

    const fs = require('fs')

    fs.readFile('file.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
    });

**Command used to create new file using PowerShell**

    New-Item file.txt

    E.g : New-Item index.js

## HTTP headers 
An **HTTP header** is a part of the communication between your web browser and a website's server. It contains important information about the request or the response, such as the type of data being sent, the size of the data, the format it's in, and other details that help the server understand and process the request correctly. It's like the metadata that accompanies the actual content being sent or received over the internet.

## CORS (Cross-Origin Resource Sharing)
Imagine someone from another party comes over and wants to join in. They speak the same language, but they're not from the same place. CORS is like the bouncer at the door who decides whether to let them in.

In web terms, **CORS** is a security feature that controls which resources (like fonts, images, or scripts) from one domain can be accessed by another domain. It's there to prevent potentially malicious scripts on one site from accessing sensitive data on another site without permission. So, just like the bouncer, **CORS** decides whether to allow or deny the request for resources from a different origin (domain).
    
## Creating Mongoose Schema

    import mongoose from 'mongoose';

    const userSchema = new mongoose.Schema({});
    
    export const User = mongoose.model('User', User);   // 'User' is model name

**➡️Mongoose Timestamps :** Mongoose schemas support a timestamps option. If you set **timestamps: true**, Mongoose will add two properties of type **Date** to your schema:

    🔸createdAt: a date representing when this document was created
    
    🔸updatedAt: a date representing when this document was last updated


    const userSchema = new mongoose.Schema(
    {
      username: {
        typeof: String,
        required: true,
        unique: true,
        lowercase: true,
      },

      email: {
        typeof: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      
      password: {
        typeof: String,
        required: [6, true, 'password is required'],
      },
    }, {timestamps: true}
    );
    
