import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth-context";
import classes from "./Login/Login.module.css"
const SignUP = () => {
  const ctx=useContext(AuthContext);
  const navigate=useNavigate();
    const [signUpData, setsignUpData] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
      });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setsignUpData({ ...signUpData, [name]: value });
  };
  const handelSubmit=(e)=>{
    e.preventDefault();
    ctx.dispatch({type:"Register"});
    navigate('/chats');
  }
  return (
    <div>
      <p>Sign Up</p>
      <form onSubmit={e=>handelSubmit(e)} className={classes.form}>
        <label htmlFor="name">FULL NAME</label>
        <input
          id="name"
          type="text"
          placeholder="Enter Your Name"
          name="name"
          // value={signUpData.name}
          onChange={(e) => handelChange(e)}
        />
        <label htmlFor="userName" > USER NAME</label>
        <input
        // value={signUpData.userName}
          id="userName"
          placeholder="Enter your User Name"
          name="userName"
          type="text"
          onChange={(e) => handelChange(e)}
        />
        <label htmlFor="email" >EMAIL</label>
        <input
        // value={signUpData.email}
          id="email"
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={(e) => handelChange(e)}
        />
        <label htmlFor="Password" >PASSWORD</label>
        <input
        // value={signUpData.password}
          id="password"
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={(e) => handelChange(e)}
        />

        <button type="submit">Sign Up</button>
       
        <span>Already have an account? </span>
        <Link to="/login">
        <button >Login</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUP;
