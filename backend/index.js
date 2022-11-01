const express = require("express");
const bodyParser=require("body-parser");
const dotenv = require("dotenv");
const http=require("http");
const {Server}=require("socket.io");
dotenv.config();
const userRoutes=require("./routes/userRoutes");
const chatRoutes=require("./routes/chatRoutes");
const app = express();
const cors = require("cors");
const data=require("../src/data/Contacts");
const connectDB=require("./DB");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions)); // Use this after the variable declaration
app.use(express.json())
//------------DB Connection----------
connectDB();
app.use("/api/user",userRoutes)
app.use("/api/chat",chatRoutes)

//----------Create Server and socket connection--------
const server=http.createServer(app);
const io=new Server(server,{
  cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST","PATCH","UPDATE","DELETE"]
  }
});

io.on("connection",(socket)=>{//for listening when the connection bw client and server is made
// console.log("id:",socket.id);
socket.on("send_msg",(data)=>{
socket.broadcast.emit("recieve_msg",data);
}) 
})


server.listen("5000",()=>{
    console.log("listening on port 5000");
});
// app.listen("5000", () => {
//   console.log("listening on port 5000");
// });
