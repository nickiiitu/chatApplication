const reducerFunc=(state,action)=>{
if(action.type==="Login"){
    return {
        openId:null,
        isLoggedIn:true,
        loggerId:action.id|| "ch9"  ,
    }
}
if(action.type==="Register"){
     return {
         openId:null,
         isLoggedIn:true,
         loggerId:action.id || "ch9" ,
        }
    }
if(action.type==="OpenChat"){
    console.log("open",action.payload);
    return {
        ...state,
        openId:action.payload.id,
    }
}
if(action.type==="LogOut"){
    // console.log("login");
return {
    openId:null,
    isLoggedIn:false,
    loggerId:null,
}
}
if(action.type==="openChatDetails"){
return {
    ...state,
    isDetailsClicked:!state.isDetailsClicked
}}
if(action.type==="updateChatList"){
    return{
        ...state,
        chatList:action.payload.data
    }

}
}

export default reducerFunc;



























// import React, {   useState,useReducer } from "react";
// import AuthContext from "./Auth-context";

// const Provider=(props)=>{
// const [ComponentState,Dispatchaction]=useReducer(reducerFunc,{
//     openId:null,
//     isLoggedIn:null,
//     loggerId:null,
// });
// const [openId,setOpenId]=useState("");
   
// // const [cartState,dispatchReducer] =useReducer(reducerFunc,);
// const handelOpenId=(id)=>{
//     console.log("handelopenid called",id);
//     setOpenId(id);
// }

//     const initialState={
//         openId,
//         handelOpenId
//     }
    
// return (
//     <AuthContext.Provider value={initialState}>
//         {props.children}
//     </AuthContext.Provider>
// )
// }

// export default Provider;
