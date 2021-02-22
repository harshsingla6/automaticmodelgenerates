const express = require("express");
const sequelize = require("sequelize")
const models = require("./models")
const {Sequelize} = require("./models")
const app = express();

app.get("/", (req,res)=>{
    new Promise((resolve,reject)=>{
    models.student.findAll({ 
        attributes : ["rollNo","name","address","phone","age",[sequelize.col('studentCourses.courseName'),'courseName']],
        include:[{
            model:models.studentCourse,
            attributes : [],
        }],
        // raw:true
    }).then(details => {
        res.send(details);   
    })
    .catch(err => {
        console.log(err)
        res.send("err")
    })
    })
})

app.listen(5000,() => {
    console.log("server is running")
})