const express = require("express");
const router = express.Router();
const chatsModel = require("../DataBase_models/ChatSchema");
const userModel = require("../DataBase_models/userSchema");

// creation of chat room
router.post("/", async (req, res) => {
  const userId = req.body.foundUser._id;
  const loggedInUserId = req.body.loggedInUserId;
  if (!req.body.foundUser._id) {
    return res.send("UserId is required");
  }

  var isChat = await chatsModel
    .find({
         "user.0":userId,
         "user.1":loggedInUserId
        //  [ userId  ,loggedInUserId ],
    })
    .populate("user", "-password")
    .populate("lastMsg");
    console.log(isChat,"chat");
    if(isChat.length===0){
      var isChat = await chatsModel
      .find({
        "user.0":loggedInUserId,
        "user.1":userId
          //  user:[ loggedInUserId,userId ],
      })      
    .populate("user", "-password")
    .populate("lastMsg");
    console.log(isChat,"cond2");
    }
    isChat = await userModel.populate(isChat, {
      path: "lastMsg.sender",
      select: "name pic email",
    });
  if (isChat.length > 0) {
    res.send(isChat[0]);
    console.log("exist");
  } else {
    const chatData = {
      chatName: "sender",
      chatType: "Individual",
      user: [userId, loggedInUserId],
    };

    try {
      const createdChat = await chatsModel.create(chatData);
      const fullChat = await chatsModel
        .findOne({ _id: createdChat._id })
        .populate("user", "-password");
      res.status(200).send(fullChat);
    } catch (error) {
      res.status(400);
      console.log(error.message);
    }
  }
});

// -----------FetchAllChats---------
router.get("/", async (req, res) => {
  // console.log(req.query.id);
  const id = req.query.id;
  // console.log(req);
  try {
    var result = await chatsModel.find({ user: { $elemMatch: { $eq: id } } })
      .populate("user","-password")
      .populate("lastMsg")
      .sort({updateAt:-1})
      console.log(result,"res");
      result = await userModel.populate(result, {
        path: "lastMsg.sender",
        select: "name pic email",
      });
      
    res.send(result).status(200);
  } catch (error) {
    res.send(error).status(400);
  }
});
router.get("/:chatterId",async (req,res)=>{
    const details=await chatsModel.findOne({_id:req.params.chatterId}).populate("user","-password");
    res.status(200).send(details);
}) 
module.exports = router;
