import React from "react";
import Banner from "../../components/Banner";
import CategoriesHomePage from "../../components/CategoriesHomePage";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewShoes from "../../components/NewShoes";
import ProminentShoes from "../../components/ProminentShoes";
import Search from "../../components/Search";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <div className="home__page">
            <Banner />
            <CategoriesHomePage />
            <NewShoes/>
            <div className="home__page--banner--brand">
              
            </div>
            <ProminentShoes/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
