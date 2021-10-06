import React from "react";
import { useHistory } from "react-router";
import Auth from "../../components/Auth";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function LoginPage() {
  const history = useHistory();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  if (user !== null) {
    console.log("redirect");
    history.push("/");
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <Auth />
        </div>
      </div>
      <Footer />
    </>
  );
}
