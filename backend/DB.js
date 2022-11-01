const mongoose=require("mongoose");

const connectDB=async ()=>{
    try {
       const conn= await mongoose.connect(process.env.Mongo_uri,{
        useNewUrlParser:true,
       });
       console.log("DB connected");
    } catch (error) {
        console.log(error.message,"db");
    }
}

module.exports=connectDB;