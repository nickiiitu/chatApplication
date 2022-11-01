import React, { useContext, useEffect, useState } from "react";
import ChatAreaFooter from "./ChatAreaFooter";
import ChatAreaHeader from "./ChatAreaHeader";
import RecievedMsg from "./RecievedMsg";
import OwnerChat from "./OwnerChat";
import messages from "../../../data/Messages";
import { AuthContext } from "../../../context/Auth-context";
import axios from "axios";
const ChatArea=()=>{
  // const [messages,setMessages]=useState();
  const ctx=useContext(AuthContext);
    let flag=false;
    useEffect(()=>{
      try {
        // const res=axios.get("http://localhost:5000/chats:");
        // setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    },[ctx.openId]);
    flag=messages.find((e)=> e.id===ctx.openId);
    if(flag){
       return(
        <div className="chat-area" >
                          <ChatAreaHeader
                            name={flag.name}
                            imgSrc={flag.imgSrc}
                           />
                          <div className="chat-area-main">
                          {flag.messages.map((ele,i)=>{
                            {/* console.log(ele.SenderName,flag.id) */}
                            if(ele.SenderName!==ctx.loggerId){
                                return(
                                  <RecievedMsg
                                        msg={ele.Message}
                                        SenderName={ele.SenderName}
                                        time={ele.time}
                                        key={i}
                           /> 
                                );
                            }else{
                               {/* console.log(ele); */}
                                    return(
                                      <OwnerChat 
                                        msg={ele.Message}
                                        SenderName={ele.SenderName}
                                        time={ele.time}
                                        key={i}
                                        img={flag.imgSrc}
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