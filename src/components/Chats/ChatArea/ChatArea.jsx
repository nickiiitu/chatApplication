import React, { useContext, useEffect, useState } from "react";
import ChatAreaFooter from "./ChatAreaFooter";
import ChatAreaHeader from "./ChatAreaHeader";
import RecievedMsg from "./RecievedMsg";
import OwnerChat from "./OwnerChat";
// import messages from "../../../data/Messages";
import { AuthContext } from "../../../context/Auth-context";
import axios from "axios";
const ChatArea=()=>{
  const [messages,setMessages]=useState();
  const [chatterDetails,setChatterDetails]=useState();
  // const [,setChatterDetails]=useState();
  
  const ctx=useContext(AuthContext);
    // let flag=false;
    useEffect(()=>{ 
      const fun=async ()=>{         
        try {
        const chatter=await axios.get(`http://localhost:5000/api/chat/${ctx.openId}`);
        setChatterDetails(chatter.data);
        // console.log(chatter.data.user,"chatter")
        }catch(err){
          console.log(err.message);
        }
        try{
        const res=await axios.get("http://localhost:5000/api/message/",{params:{chatId:ctx.openId}});
        setMessages(res.data);
      } catch (error) {
        console.log(error); 
      }
      try {
        // const openedChatInfo=await axios.get(`http://localhost:5000/api/user/${ctx.openId}`);

      } catch (error) {
        console.log(error.message);
      }
    }
    // }
    if(ctx.openId){  fun(); }
    },[ctx.openId]);
    // flag=messages.find((e)=> e.id===ctx.openId);S
    if(ctx.openId){
       return(
        <div className="chat-area" >
                          <ChatAreaHeader
                            name={chatterDetails?.user[0].name}
                            imgSrc={chatterDetails?.user[0].pic}
                           />
<div className="chat-area-main">
                          {messages?.map((ele,i)=>{
                            if(ele.sender._id!==ctx.loggerId){
                                return(
                                  <RecievedMsg
                                        msg={ele.content}
                                        SenderName={ele.chat.user[0].name}
                                        time={ele.chat.user[0].updatedAt}
                                        key={i}
                           /> 
                                );
                            }else{
                                    return(
                                      <OwnerChat 
                                        msg={ele.content}
                                        SenderName={ele.sender.name}
                                        time={ele.sender.updatedAt}
                                        key={i}
                                        // img={flag.imgSrc}
                                />
                           
                                    )
                            }
                          })}
                          </div>
                          <ChatAreaFooter />
                         </div>
       )
        
    }

        return <span>No open chat</span>
    
   
}
  
export default ChatArea;