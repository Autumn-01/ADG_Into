const express=require("express");
const mongoose= require("mongoose");

const router=express.Router();
const CourseModel=mongoose.model("Course");

router.get("/add",(req,res)=>{
    res.render("add-course")
});

router.post("/add",(req,res)=>{
    
    var course = new CourseModel();
    course.Name = req.body.Name;
    course.Email = req.body.Email;
    course.Phonenumber = req.body.Phonenumber;
    course.userid = Math.ceil(Math.random() * 100000);
    
    course.save((err,doc)=>{
        if(!err)
        {
            res.redirect("/course/list");
        }
        else
        {
            console.log("Error occured in database")
            res.send("error");
        }
    });
});

router.get("/search/:nameid",(req,res,next)=>{
   /* courseModel.find((err,docs)=>{
        if(!err)
        {
            console.log(docs);
            res.render("list",{ data : docs})
        }
        else
        {    
          res.send("error")
        }
    });*/
    var id=req.params.nameid;
    CourseModel.find({
        "Name" : id
    });
    function(err, docs) {
        if(err)
        {
            res.send("error displaying user info");
        }
        if(docs)
        {
            console.log(docs);
            res.render("list", { data: docs});
        }
    }
    
});

module.exports =router;