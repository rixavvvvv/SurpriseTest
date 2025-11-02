const { configDotenv } = require("dotenv");
const express = require("express");
const { setupDatabase } = require("./database/db");
const router = express.Router();

const app = express();

const PORT = 3000;


//middleware
app.use(express.json())

//Db setup 
setupDatabase("mongodb://localhost:27017/");


//Router

app.use(router);




app.listen(3000, () => {
    console.log("server is up at port", 3000);
})