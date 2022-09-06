import React from "react";
import GroupChat from "./GroupChat";
import IndividualChat from "./IndividualChat";
import Chatdata from "../../../data/Contacts";
const ChatsSection=()=>{

    return(
        <div className="conversation-area">
      
        {Chatdata.map((data,i)=>{
          const type="Indiviual";
          if(type===data.chatType){
           return <IndividualChat 
         key={i}
         id={data.id}
           imgSrc={data.imgSrc}
           name={data.name}
           msg={data.msg}
           time={data.time}
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
        })}
         

         {/* <GroupChat /> */}

         <button className="add"></button>
         <div className="overlay"></div>
        </div>

    );
}

export default ChatsSection;
