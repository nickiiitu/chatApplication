import React from "react";

const ChatAreaHeader=(props)=>{
    return(
<div className="chat-area-header">
<img className="msg-profile" src={props.imgSrc} alt="" />
           <div className="chat-area-title">{props.name}</div>
           {/* <div className="chat-area-group">
            <img className="chat-area-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
            <img className="chat-area-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="" />
            <img className="chat-area-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png" alt="" />
            <span>+4</span>
           </div> */}
          </div>
    );
}

export default ChatAreaHeader;
