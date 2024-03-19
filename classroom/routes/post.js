const express = require("express");
const router = express.Router();  

//posts

// index-users
router.get("/",(req,res) =>{
    res.send("get for posts");
});

// show - users
router.get("/:id",(req,res) =>{
    res.send("get for  postss id ");
});

// post-users 
router.post("/",(req,res) =>{
    res.send("post for Posts");
});

//delete-users
router.delete("/:id",(req,res)=>{
    res.send("delete for post id");
});
module.exports=router;