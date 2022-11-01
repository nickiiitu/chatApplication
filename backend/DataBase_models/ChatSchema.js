const mongoose=require("mongoose");
const ChatSchema=mongoose.Schema({
    chatName:{
        type:String,
required:true,
    },
    chatType:{
        type:String,
        required:true,
    },
    lastMsg:{
      type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
    },
    user:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"  
    }]
},{
    timestamps:true, 
});

module.exports=mongoose.model("Chatter",ChatSchema);