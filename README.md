
# Wellnest 

## Description

🚵 🚴 🏂 🏊 🏄

Nest better habits! Centered in the daily doings and habits of humans. **Wellnest** is a todo application where you can create, read, update and delete todos, while at the same time seeing different workout plans and registering your daily nutrition that you incorporate in daily basis, in order to live a healthier, happier, energetic and productive life.



| | Technologies used|
| ------ | ----------- |
| Front-end: | Bootstrap, jQuery |
| Back-end: | Sequelize, Express, Node.js, Passport.js |

### Demo

Our project is deployed using Heroku. Visit it here: [Wellnest](https://wellnest-project.herokuapp.com/ "Wellnest app")

**Dependencies:**

-   Bcrypt - A library to help you hash passwords.
    
-   Connect-ensure-login - A middleware ensures that a user is logged in
    
-   Dotenv - Dotenv is a zero-dependency module that loads environment variables from a .env file into [process.env](https://nodejs.org/docs/latest/api/process.html#process_process_env). This will help save confidential variables that we do not want to be made public.
    
-   Express - Web framework for node
    
-   Express-session - This will help save user sessions on server side.
    
-   Mysql2 - This will allow MySQL client to communicate with Node.js
    
-   Passport - [Express](http://expressjs.com/)-compatible authentication middleware for [Node.js](http://nodejs.org/).
    
-   Passport-local - [Passport](http://passportjs.org/) strategy for authenticating with a username and password.
    
-   Sequelize - a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
    

### APIs we will be using:

-   Authentication API when use signs in - [http://www.passportjs.org/](http://www.passportjs.org/)
    
-   Nutrition API - [https://developer.nutritionix.com/](https://developer.nutritionix.com/)
    
-   Workout API - [https://wger.de/en/software/api](https://wger.de/en/software/api)



###  Setup the app to locally run it

First, MySQL Database Setup

In order to run this application, you should have the MySQL database already set up on your machine. If you don't currently have it, visit the  [MySQL installation page](https://dev.mysql.com/doc/refman/5.6/en/installing.html)  to install latest version. Once you have MySQL installed, you will be able to create the **Wellnest** database.. You will be running this code inside your MySQL client.

	-- Drops the wellnest if it exists currently --

	DROP DATABASE IF EXISTS wellnest;

	-- Creates the "wellnest" database --

	CREATE DATABASE wellnest;

Second, Create a file named ".env" and make sure you have the following code inside it (without the ' ' :
```
SQL_PWD = 'YOUR-SQL-PASSWORD'
```
Third, we are assuming you have the node.js installed. If you don't have it, visit [https://nodejs.org/en/](https://nodejs.org/en/) on how to install it. It's important because you will be able to install the dependencies for npm. Type "npm i" to install all the dependencies.

You should be all set up. Simply type "node server.js" and visit the port indicated in the terminal.	


### Screenshots


###  Team

**Front-end:**

 - [Arin](https://github.com/arinmsn "Arin Minasian's Github Profile")
 - [Jin](https://github.com/twitchjinja?tab=repositories "Jin Young Kim's Github Profile")

**Back-end:**
 - [Luna](https://github.com/lunazrivera "Luna Rivera's Github Profile")
 - [Joshua](https://github.com/jflopezr11 "Joshua Lopez's Github Profile")
