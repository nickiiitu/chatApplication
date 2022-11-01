const express=require("express");
const { v4: uuidv4 } = require("uuid");
const router=express.Router();
const userModel=require("../DataBase_models/userSchema");
//----------Register------------

router.post("/",async (req,res)=>{
    console.log(req.body);
    const {name,userName,email,password}=req.body;
    if(!password||!userName||!name||!email){
        res.status(400).send("fill all the details");
    }
    
    const userExist=await userModel.findOne({email});
    if(userExist){
        res.send("user already exists").status(400);
    }else{
    // const id = uuidv4();
    const userDetails={
        name,
        userName,
        email,
        password,
        // userId:id
    }
    try {
        const newUser=await userModel.create(userDetails);
        console.log(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.sendStatus(400);
        console.log(error.message);
    }
    }
    // nsole.log("register Api", id);
    // res.status(200).send({id});  
});


//------------LOGIN--------------
router.post("/login", async (req, res) => {
    const {userName}=req.body;
    try {
        const userExist=await userModel.findOne({userName});
        res.status(200).json(userExist);
    } catch (error) {
        res.sendStatus(400);
        console.log(error.message);
    }
  });

//   -------------SearchUser--------------- for setting fetchoption in searchbar autocomplete
  router.get("/search",async(req,res)=>{
    const allUsers=await userModel.find({name:{$regex:req.query.name,$options:"i"}}).find({_id:{$ne:req.query.id}});
    res.json(allUsers).status(200);
  });
module.exports=router;