import React from "react";
import { GrFacebook, GrYoutube, GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import logoText from "../../assets/img/logo/logo-text.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={logoText} alt="HanoiFC" />
          </Link>
          <div className="footer__socials">
            <a
              href="https://www.facebook.com/HanoiFootballClub.vn"
              target="_blank"
              rel="noreferrer noopener"
              title="Facebook"
            >
              <GrFacebook />
            </a>
            <a
              href="https://www.youtube.com/hanoifc"
              target="_blank"
              rel="noreferrer noopener"
              title="Youtube"
            >
              <GrYoutube />
            </a>
            <a
              href="https://www.instagram.com/officialhanoifc"
              target="_blank"
              rel="noreferrer noopener"
              title="Instagram"
            >
              <GrInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@hanoi.fc"
              target="_blank"
              rel="noreferrer noopener"
              title="Tiktok"
            >
              <FaTiktok />
            </a>
          </div>
        </article>
        <article>
          <div className="footer__link-top">
            <Link to="/">Trang chủ</Link>
            <Link to="/about">Giới thiệu</Link>
            <Link to="/team">Đội hình</Link>
            <Link to="/competition">Thi đấu</Link>
          </div>
          <div className="footer__link-bottom">
            <Link to="/forum">Diễn đàn</Link>
            <Link to="/store">Cửa hàng</Link>
            <Link to="/livestream">Trực tiếp</Link>
            <Link to="/contact">Liên hệ</Link>
          </div>
        </article>
      </div>
      <div className="footer__copyright">
        <small>
          Copyright 2022 HANOI Football Club and T&T SPORT JSC &copy; All rights
          reserved. Developed and maintained by HANOI FOOTBALL CLUB.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
