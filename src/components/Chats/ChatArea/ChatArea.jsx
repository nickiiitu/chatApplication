import React, { useContext } from "react";
import ChatAreaFooter from "./ChatAreaFooter";
import ChatAreaHeader from "./ChatAreaHeader";
import RecievedMsg from "./RecievedMsg";
import OwnerChat from "./OwnerChat";
import messages from "../../../data/Messages";
import { AuthContext } from "../../../context/Auth-context";
const ChatArea=()=>{
  const ctx=useContext(AuthContext);
    let flag=false;
    // console.log(ctx.openId,"flag");
    flag=messages.find((e)=> e.id===ctx.openId);
    // console.log(flag,"flag");
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
                           {/* <div className="chat-msg">
                            <div className="chat-msg-profile">
                             <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt=""/>
                             <div className="chat-msg-date">Message seen 2.45pm</div>
                            </div>
                            <div className="chat-msg-content">
                             <div className="chat-msg-text">Aenean tristique maximus tortor non tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae😊</div>
                             <div className="chat-msg-text">Ut faucibus pulvinar elementum integer enim neque volutpat.</div>
                            </div>
                           </div>
                           <div className="chat-msg owner">
                            <div className="chat-msg-profile">
                             <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
                             <div className="chat-msg-date">Message seen 2.50pm</div>
                            </div>
                            <div className="chat-msg-content">
                             <div className="chat-msg-text">posuere eget augue sodales, aliquet posuere eros.</div>
                             <div className="chat-msg-text">Cras mollis nec arcu malesuada tincidunt.</div>
                            </div>
                           </div>
                           <div className="chat-msg">
                            <div className="chat-msg-profile">
                             <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png" alt="" />
                             <div className="chat-msg-date">Message seen 3.16pm</div>
                            </div>
                            <div className="chat-msg-content">
                             <div className="chat-msg-text">Egestas tellus rutrum tellus pellentesque</div>
                            </div>
                           </div>
                           <div className="chat-msg">
                            <div className="chat-msg-profile">
                             <img className="chat-msg-img account-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"  alt="" />
                             <div className="chat-msg-date">Message seen 3.16pm</div>
                            </div>
                            <div className="chat-msg-content">
                             <div className="chat-msg-text">Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et.</div>
                            </div>
                           </div>
                           <div className="chat-msg owner">
                            <div className="chat-msg-profile">
                             <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
                             <div className="chat-msg-date">Message seen 2.50pm</div>
                            </div>
                            <div className="chat-msg-content">
                             <div className="chat-msg-text">Tincidunt arcu non sodales😂</div>
                            </div>
                           </div>
                           <div className="chat-msg">
                            <div className="chat-msg-profile">
                             <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="" />
                             <div className="chat-msg-date">Message seen 3.16pm</div>
                            </div>
                            <div className="chat-msg-content">
                             <div className="chat-msg-text">Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et🥰</div>
                            </div>
                           </div> */}
                          </div>
                          <ChatAreaFooter />
                         </div>
       )
        
    }
    // {
    //     messages.map((e,i)=>{
    //         if(ctx.id==e.id){
    //             flag=true;
    //                 return(
                        
    //                 );
                
    //         }
    //     });
    // }
   
        return <span>No open chat</span>
    
   
}

export default ChatArea;