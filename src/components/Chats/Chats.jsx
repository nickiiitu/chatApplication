import React, { useContext } from "react";
import ChatsSection from "./ChatSection/ChatsSection";
import "./chats.css";
import ChatArea from "./ChatArea/ChatArea";
import ChatDetails from "./ChatDetails/ChatDetails";
import Header from "../Header/Header";
import { AuthContext } from "../../context/Auth-context";
import { useEffect } from "react";
const Chats=()=>{
  const ctx=useContext(AuthContext);
 const localUser=localStorage.getItem("loggerId");
 if(localUser && ctx.loggerId===null){
  ctx.dispatch({type:"Login" , id:localUser});
 }
    return(
        <div>
        <div className="app">
        <Header />
        <div className="wrapper">
          <ChatsSection />

         <ChatArea />
        {ctx.isDetailsClicked && <ChatDetails />}
        </div>
       </div>
       </div>
    );
}

export default Chats;