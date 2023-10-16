import React, { useContext } from "react";
import { AuthContext } from "../../../context/Auth-context";


const IndividualChat=(props)=>{
const ctx=useContext(AuthContext);
const handelClick=()=>{
    console.log("dispa");
ctx.dispatch({type:"OpenChat",payload:{id:props.id}});
    }
        return(
        <div className={`msg online ${ctx.openId===props.id?"active":""}`} onClick={handelClick}>
           <img className="msg-profile" src={props.imgSrc} alt="" />
           <div className="msg-detail">
            <div className="msg-username">{props.name}</div>
            <div className="msg-content">
             <span className="msg-message">{props.msg}</span>
             <span className="msg-date">{props.time}</span>
            </div>
           </div>
          </div>
    );
}

export default IndividualChat;;
