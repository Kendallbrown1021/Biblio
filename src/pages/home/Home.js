import React from "react";
import "./home.scss";
const Home = () => {
  return (
    <section className="home_container">
      <div className="home_container-content">
        <div className="home_container-new">
          <p className="home_content">
            Welcome to
            <br /> <span className="home_content-special">Bibliolater,</span>
            <br />
            The Social site for Bibliophiles and book lovers alike to connect ,
            collect, and share a love for books.
          </p>
          <button className="home_cta">
            <a href="/login" className="home_cta-link">
              Log In/ Sign Up
            </a>
          </button>
        </div>
      </div>
      <div className="home_image-container">
        <div className="home_image-filter"></div>
      </div>
    </section>
  );
};

export default Home;
