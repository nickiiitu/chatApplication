import React from "react";

const OwnerChat=(props)=>{
    // console.log(props);
    return(
<div className="chat-msg owner">
            <div className="chat-msg-profile">
             <img className="chat-msg-img" src={props.imgSrc} alt="" />
             <div className="chat-msg-date">{props.time}</div>
            </div>
            <div className="chat-msg-content">
             <div className="chat-msg-text">{props.msg}</div>
             {/* <div className="chat-msg-text">Cras mollis nec arcu malesuada tincidunt.</div> */}
            </div>
           </div>
    )
}

export default OwnerChat;
