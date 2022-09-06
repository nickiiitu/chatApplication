const reducerFunc=(state,action)=>{
if(action.type==="Login"){
return {
    openId:null,
    isLoggedIn:true,
    loggerId:"ch9",
}
}
 if(action.type==="Register"){
     return {
         openId:null,
         isLoggedIn:true,
         loggerId:"ch9",
        }
    }
if(action.type==="OpenChat"){
    // console.log("open",action.payload);
    return {
        openId:action.payload.id,
        isLoggedIn:true,
        loggerId:"ch9",
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
