import md5 from "md5";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { authApi } from "../api/AuthApi";

export default function SigUpForm({ onSetTab }) {
  const history = useHistory();
  const [signUpInput, setSignUpInput] = useState({
    username: "",
    password: "",
    repassword: "",
  });
  const handleSignUp = (e) => {
    e.preventDefault();
    const { username, password, repassword } = signUpInput;
    console.log(signUpInput);
    if (username.trim() === "") {
      toast.error("Vui lòng nhập tên tài khoản!");
    } else if (password.trim() === "") {
      toast.error("Vui lòng nhập mật khẩu!");
    } else if (password.trim().length < 8) {
      toast.error("Mật khẩu phải có tối thiểu 8 ký tự!");
    } else if (repassword.trim() === "") {
      toast.error("Vui lòng xác nhận mật khẩu!");
    } else if (password.trim() !== repassword.trim()) {
      toast.error("Mật khẩu không khớp!");
    } else {
      authApi.checkUsername({ username }).then((res) => {
        if (res.length > 0) {
          toast.error("Tên tài khoản đã tồn tại!");
        } else {
          authApi
            .signUp({ username, password: md5(password) })
            .then((res) => {
              toast.success("Đăng ký tài khoản thành công!");
              setTimeout(() => {
                setTimeout(() => {
                  onSetTab();
                }, 1500);
                toast.info("Đang chuyển hướng...");
              }, 2000);
            })
            .catch((e) => {
              toast.error("Đã xảy ra lỗi, vui lòng thử lại!");
            });
        }
      });
    }
  };
  return (
    <form className="login__page--form" onSubmit={handleSignUp}>
      <div className="login__page--form--label">Username:</div>
      <input
        type="text"
        placeholder="Enter your username...."
        value={signUpInput.username}
        onChange={(e) =>
          setSignUpInput({ ...signUpInput, username: e.target.value })
        }
      />
      <div className="login__page--form--label">Password:</div>
      <input
        type="password"
        placeholder="Enter your password..."
        value={signUpInput.password}
        onChange={(e) =>
          setSignUpInput({ ...signUpInput, password: e.target.value })
        }
      />
      <div className="login__page--form--label">Retype password:</div>
      <input
        type="password"
        placeholder="Retype your password..."
        value={signUpInput.repassword}
        onChange={(e) =>
          setSignUpInput({ ...signUpInput, repassword: e.target.value })
        }
      />
      <button type="submit" className="btn--login">
        Create an account
      </button>
    </form>
  );
}
