const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const msgModel = require("../DataBase_models/MessageSchema");
const userModel = require("../DataBase_models/userSchema");

router.post("/", async (req, res) => {
  const { chatId, userId, content } = req.body;
  if (!content && !chatId) {
    return res.status(400).send("Details Not Found");
  }
  try {
    await msgModel.create({ sender: userId, content, chat: chatId });
    var newMsg = await msgModel
      .findOne({ sender: userId })
      .populate("sender", "_id name pic")
      .populate("chat");
    // console.log(newMsg);
    newMsg = await userModel.populate(newMsg,{ path: "chat.user" , select: "_id name pic"});
    res.status(200).send(newMsg);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/", async (req, res) => {
  
  const chatId = req.query.chatId;
  // console.log(req.query.chatId);
  try {
    var chats = await msgModel.find({ chat: {_id:chatId} }).populate("sender","-password").populate("chat");
    chats= await userModel.populate(chats,{ path: "chat.user" ,select:"-password"});
    res.status(200).send(chats);
    
    // console.log(chats);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = router;
