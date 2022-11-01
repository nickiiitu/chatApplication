import React, { useContext } from "react";
import { AuthContext } from "../../../context/Auth-context";

const GroupChat=(props)=>{
  const ctx=useContext(AuthContext);
  const handelClick=()=>{
    // console.log("ctx",ctx);
    // console.log(props,"prosp");
ctx.dispatch({type:"OpenChat",payload:{id:props.id}});
  }
return(
<div className={`msg ${ctx.openId===props.id?"active":""}`} onClick={handelClick}>
          <div className="msg-profile group">
           <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
            <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
            <path d="M22 8.5l-10 7-10-7" />
            <path d="M2 15.5l10-7 10 7M12 2v6.5" /></svg>
          </div>
          <div className="msg-detail">
           <div className="msg-username">
           <span>{props.GroupName}</span></div>
           <div className="msg-content">
            <span className="msg-message">{ props.LastmsgBy}:{ props.msg}</span>
            <span className="msg-date">{props.time}</span>
           </div>
          </div>
         </div>
);
}

export default GroupChat;
