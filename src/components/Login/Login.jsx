import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth-context";
import classes from "./Login.module.css";
const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const ctx=useContext(AuthContext);
  const handelChange=(e)=>{
// console.log(e);
const {name,val}=e.target;
setLoginData({
    ...loginData,
    [name]:val
});
  }
  const navigate=useNavigate();
  const handelSubmit=(e)=>{
    e.preventDefault();
    // console.log(ctx);
ctx.dispatch({type:"Login"});
navigate("/chats");
  }
  return (
    <div>
      <form onSubmit={e=>handelSubmit(e)} className={classes.form}>
        <label htmlFor="username">USERNAME</label>
        <input
        onChange={e=>handelChange(e)}
          type="text"
          id="username"
        //   value={loginData.username|| ""}
          placeholder="Enter Your Full Name"
          name="username"
        ></input>
         <label htmlFor="password">PASSWORD</label>
        <input
        onChange={e=>handelChange(e)}
          type="text"
          id="password"
        //   value={loginData.password}
          placeholder="Enter Your Password"
          name="password"
        ></input>
        <button type="submit">Login </button>
      </form>
    </div>
  );
};

export default Login;
