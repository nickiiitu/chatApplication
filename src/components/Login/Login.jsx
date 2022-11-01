import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth-context";
import classes from "./Login.module.css";
import axios from "axios";
const Login = () => {
  const [loginData, setLoginData] = useState({ userName: null, password: null });
  const ctx=useContext(AuthContext);
  const navigate=useNavigate();
useEffect( ()=>{
  async function fun(){
if(ctx.isLoggedIn){
  try {
  const res=await axios.post("http://localhost:5000/api/user/login",loginData);
  console.log(res.data,"res");
  if(res.status===200){
    ctx.dispatch({type:"Login" ,id:res.data._id});
    localStorage.setItem("loggerId",res.data._id);
      navigate("/chats");
  }else{
    ctx.dispatch({type:"LogOut"});
  }
} catch (error) {
  console.log(error,"err");
}}
}
fun();
},[ctx.isLoggedIn])

  const handelChange=(e)=>{
const {name,value}=e.target;
setLoginData({
    ...loginData,
    [name]:value
});
  }
  const handelSubmit=(e)=>{
    e.preventDefault();
    if(loginData.userName.length>0 && loginData.password.length>0){
      ctx.dispatch({type:"Login"});
    }
  }
  return (
    <div>
      <form onSubmit={e=>handelSubmit(e)} className={classes.form}>
        <label htmlFor="userName">userName</label>
        <input
        onChange={e=>handelChange(e)}
          type="text"
          id="userName"
        //   value={loginData.userName|| ""}
          placeholder="Enter Your Full Name"
          name="userName"
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
