import React, { useContext, useEffect, useState } from "react";
import GroupChat from "./GroupChat";
import IndividualChat from "./IndividualChat";
// import Chatdata from "../../../data/Contacts";
import { AuthContext } from "../../../context/Auth-context";
import axios from "axios";

const ChatsSection = () => {
  const ctx = useContext(AuthContext);
  useEffect(() => {
    if (ctx.loggerId) {
      async function fun() {
        try {
          const res = await axios.get("http://localhost:5000/api/chat", {
            params: { id: ctx.loggerId },
          });
          ctx.dispatch({ type: "updateChatList", payload: { data: res.data } });
        } catch (error) {
          console.log(error);
        }
      }
      fun();
    }
  }, [ctx.loggerId]);
  return (
    <div className="conversation-area">
      {ctx.chatList?.map((data, i) => {
        return (
          <IndividualChat
            key={i}
            //  id={data.user[0]._id}
            id={data._id}
            imgSrc={data.user[0].pic}
            name={data.user[0].name}
          />
        );
      })}
      {/* {Chatdata?.map((data,i)=>{
        return <IndividualChat 
         key={i}
         id={data.userId}
           imgSrc={data.pic}
           name={data.name} />
      })} */}
      {/* {Chatdata?.map((data,i)=>{
          const type="Indiviual";
          if(type===data.chatType){
           return <IndividualChat 
         key={i}
         id={data.userId}
           imgSrc={data.pic}
           name={data.name}
          //  msg={data.msg}
          //  time={data.time}
         />
          }else{
            return <GroupChat 
                key={i}
                id={data.id}
                GroupName={data.GroupName}
                msg={data.msg}
                LastmsgBy={data.LastmsgBy}
                time={data.time}
            />
          }
        })} */}

      <button className="add"></button>
      <div className="overlay"></div>
    </div>
  );
};

export default ChatsSection;
