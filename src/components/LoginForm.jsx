import md5 from "md5";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { authApi } from "../api/AuthApi";

export default function LoginForm(props) {
    const history = useHistory();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const handleChangUsername = (e) => {
    setLogin({
      password: login.password,
      username: e.target.value,
    });
  };
  const handleChangPassword = (e) => {
    setLogin({
      username: login.username,
      password: e.target.value,
    });
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const { username, password } = login;

    if (username.trim() === "") {
      toast.error("Vui lòng nhập tên tài khoản!");
    } else if (password.trim() === "") {
      toast.error("Vui lòng nhập mật khẩu!");
    } else if (password.trim().length < 8) {
      toast.error("Mật khẩu phải chứa tối thiểu 8 ký tự!");
    } else {
      authApi
        .login({
          username: username,
        })
        .then((u) => {
          if (u[0]) {
              const user = u[0];
            if (
              user.username === username &&
              user.password === md5(password)
            ) {
              toast.success("Đăng nhập thành công!");
              localStorage.setItem("user", JSON.stringify(user));
              setTimeout(()=>{
                history.push("/");
              },1500)
            } else if (
              user.username === username &&
              user.password !== md5(password)
            ) {
              toast.error("Sai mật khẩu!");
            }
          } else {
            toast.error("Tên tài khoản hoặc mật khẩu không chính xác!");
          }  
        });
    }
  };
  return (
    <form className="login__page--form" onSubmit={handleSubmitLogin}>
      <div className="login__page--form--label">Username:</div>
      <input
        type="text"
        placeholder="Enter your username...."
        value={login.username}
        onChange={handleChangUsername}
      />
      <div className="login__page--form--label">Password:</div>
      <input
        type="password"
        placeholder="Enter your password..."
        value={login.password}
        onChange={handleChangPassword}
      />
      <button type="submit" className="btn--login">
        {props.isLoading ? (
          <i className="fas fa-spinner loading--login"></i>
        ) : (
          ""
        )}{" "}
        Login
      </button>
    </form>
  );
}
