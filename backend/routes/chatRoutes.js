const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const chatsModel = require("../DataBase_models/ChatSchema");
const userModel = require("../DataBase_models/userSchema");

// creation of chat room
router.post("/", async (req, res) => {
  const userId = req.body.foundUser._id;
  const loggedInUserId = req.body.loggedInUserId;
  // const mongoLoggerData = await userModel.findOne({ userId: loggedInUserId });
  // const loggedInUserId = mongoose.Types.ObjectId(mongoLoggerData._id);
  if (!req.body.foundUser._id) {
    return res.send("UserId is required");
  }

  // var isChat = await chatsModel
  //   .find({
  //     $and: [
  //       { user: { $elemMatch: { $eq: userId } } },
  //       { user: { $elemMatch: { $eq: loggedInUserId } } },
  //     ],
  //     chatType: "Indiviual",
  //   })
  //   .populate("user", "-password")
  //   .populate("lastMsg");
  var isChat = await chatsModel
    .find({
         user:[ userId  ,loggedInUserId ],
    })
    .populate("user", "-password")
    .populate("lastMsg");
    isChat = await userModel.populate(isChat, {
      path: "lastMsg.sender",
      select: "name pic email",
    });
    console.log(isChat);
  if (isChat.length > 0) {
    res.send(isChat[0]);
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
  console.log(req.query._id);
  const id = req.query._id;
  try {
    var result = await chatsModel.find({ user: { $elemMatch: { $eq: id } } })
      .populate("user","-password")
      .populate("lastMsg")
      .sort({updateAt:-1})
      result = await userModel.populate(result, {
        path: "lastMsg.sender",
        select: "name pic email",
      });
    res.send(result).status(200);
  } catch (error) {
    res.send(error).status(400);
  }
});
module.exports = router;
