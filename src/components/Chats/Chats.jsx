import React from "react";
import ChatsSection from "./ChatSection/ChatsSection";
import "./chats.css";
import ChatArea from "./ChatArea/ChatArea";
import ChatDetails from "./ChatDetails/ChatDetails";
import Header from "../Header/Header";
const Chats=()=>{
  
    return(
        <div>
        <div className="app">
        <Header />
        <div className="wrapper">
          <ChatsSection />

         <ChatArea />
        <ChatDetails />
        </div>
       </div>
       </div>
    );
}

export default Chats;