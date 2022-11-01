const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    userName:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
     password:{
        type:String,
        trim:true,
        required:true
     },
     userId:{
        type:String,
        // required:true
     },
     pic:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThye7oEv-5iseoJ1f5VaW-aIczCLBiFsHdooySGmQ&s"
    }
},{
    timestamps:true, 
});

const userModel=mongoose.model("User",userSchema);

module.exports=userModel;