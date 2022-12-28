import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo/logo.png";
import "./Banner.css";

function Banner() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#HanoiFC #PrideofHanoi</h4>
          <h1>Câu Lạc Bộ Hà Nội</h1>
          <h1>Niềm Tự Hào Thủ Đô</h1>
          <p>
            Welcome to the Official Ha Noi FC Page. Keep up to date with the
            latest news and content, engage with the club and fellow supporters.
          </p>
          {/* <Link to="/" className="btn lg">
            Get Started
          </Link> */}
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={logo} alt="HanoiFC" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
