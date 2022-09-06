import React, { useReducer,createContext}from "react";
import reducerFunc from "./Provider.js";
const InitialState={
    openId:null,
    isLoggedIn:null,
    loggerId:null,
    };
export const AuthContext=createContext(InitialState);

 const Provider=(props)=>{
    const [ComponentState,dispatch]=useReducer(reducerFunc,InitialState);
    return(
        <AuthContext.Provider
         value={{
            openId:ComponentState.openId,
        isLoggedIn:ComponentState.isLoggedIn,
        loggerId:ComponentState.loggerId,
        dispatch}
        }>
            {props.children}
        </AuthContext.Provider>
    )
};
export default Provider  ;





















// import React from "react";

// const AuthContext=React.createContext({
// openId:null,
// handelOpenId:(id)=>{},
// isLoggedIn:null,
// loggerId:null,
// });

// export default AuthContext;
