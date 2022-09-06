import React from "react";

const RecievedMsg=(props)=>{
    // console.log(props);
    return(
        <div className="chat-msg">
        <div className="chat-msg-profile">
         <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
         <div className="chat-msg-date">{props.time}</div>
        </div>
        <div className="chat-msg-content">
         <div className="chat-msg-text">{props.msg}</div>
         {/* <div className="chat-msg-text">Luctus et ultrices posuere cubilia curae.</div> */}
         {/* <div className="chat-msg-text">
          <img src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif" alt =""/>
          </div>
         <div className="chat-msg-text">Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Pretium lectus quam id leo.</div> */}
        </div> 
       </div>
    )
}

export default RecievedMsg;
