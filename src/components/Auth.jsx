import React, { useState } from "react";
import { authApi } from "../api/AuthApi";
import LoginForm from "./LoginForm";
import SigUpForm from "./SigUpForm";
import md5 from "md5";
import { Redirect, useHistory } from "react-router";

export default function Auth() {
  const history = useHistory();
    const [tab,setTab] = useState(true);
    const [loadingLogin,setLoadingLogin] = useState(false);
    const [login,setLogin] = useState({
      username:'', password: ''
    });
    const [signUp,setSignUp] = useState({});
    const handleChangeTab = (value) =>{
        setTab(value);
    }

    const handleReceiveLogin = (logins) =>{
      setLogin(logins)
      setLoadingLogin(true);

      authApi.login({
        username: logins.username,
      }).then((user)=>{
        setLoadingLogin(false);
        if(user[0]){
          if(user[0].username === logins.username && user[0].password === md5(logins.password)){
            console.log("login success!");
            localStorage.setItem("user",JSON.stringify(user[0]))
            history.push("/")
            
          }
          else if(user[0].username === logins.username && user[0].password !== md5(logins.password)){
            console.log("wrong password!");
            alert("wrong password! try again!")
            
          }
        }
        else{
          console.log("account is not exist!");
          alert("account is not exist!")

        }
      })
    }

  return (
    <div className="login__page">
      <div className="login__main">
        <div className="login__main--leftd">
        <lottie-player className="lotie" src="https://assets4.lottiefiles.com/packages/lf20_luyv4hl3.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
        </div>
        <div className="login__main--right">
          <div className={tab === false ? "login__main--right--login display--none" : "login__main--right--login none"}>
            <div className="login__main--right--login--title">
              <div className="title--1">Start For free</div>
              <div className="title--2">Sign up to T-Shoes</div>
              <div className="title--3">
                <div>Already a member?</div>
                <div className="redirect--login" onClick={()=>handleChangeTab(true)}>login</div>
              </div>
            </div>
            <div className="login__main--right--login--form">
              <SigUpForm/>
              <div className="terms">
                This site is protected by reCAPTCHA ana the Google
              </div>
              <div className="terms">
                <span>Privacy Policy</span> and <span>Terms of Service</span>{" "}
                apply
              </div>
            </div>
          </div>
          <div className={tab === true ? "login__main--right--login display" : "login__main--right--login none"}>
            <div className="login__main--right--login--title">
              <div className="title--1">Start For free</div>
              <div className="title--2">Login to T-Shoes</div>
              <div className="title--3">
                <div>You don't have an account yet?</div>
                <div className="redirect--login" onClick={()=> handleChangeTab(false)}>sign up</div>
              </div>
            </div>
            <div className="login__main--right--login--form">
              <LoginForm handleSubmitLogin={handleReceiveLogin} isLoading={loadingLogin}/>
              <div className="terms">
                This site is protected by reCAPTCHA ana the Google
              </div>
              <div className="terms">
                <span>Privacy Policy</span> and <span>Terms of Service</span>
                apply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
