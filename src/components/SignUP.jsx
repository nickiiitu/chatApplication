import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth-context";
import classes from "./Login/Login.module.css";
const SignUP = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const [signUpData, setsignUpData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });

    const fun=async()=> {
        try {
          console.log("fun");
          const res = await axios.post(
            "http://localhost:5000/api/user/",
            signUpData
          );
          if (res) {
            console.log(res.data,"res");
            ctx.dispatch({ type: "Register", id: res.data._id });
            navigate("/chats");
          } else {
            ctx.dispatch({ type: "LogOut" });
          }
        } catch (error) {
          console.log(error, "err");
        }
    }

  const handelChange = (e) => {
    const { name, value } = e.target;
    setsignUpData({ ...signUpData, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    fun();
  };
  return (
    <div>
      <p>Sign Up</p>
      <form  className={classes.form}>
        <label htmlFor="name">FULL NAME</label>
        <input
          id="name"
          type="text"
          placeholder="Enter Your Name"
          name="name"
          onChange={(e) => handelChange(e)}
        />
        <label htmlFor="userName"> USER NAME</label>
        <input
          id="userName"
          placeholder="Enter your User Name"
          name="userName"
          type="text"
          onChange={(e) => handelChange(e)}
        />
        <label htmlFor="email">EMAIL</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={(e) => handelChange(e)}
        />
        <label htmlFor="Password">PASSWORD</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={(e) => handelChange(e)}
        />

        <button type="submit" onClick={(e) => handelSubmit(e)}>Sign Up</button>

        <span>Already have an account? </span>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUP;
