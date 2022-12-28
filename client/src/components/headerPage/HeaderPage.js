import React from "react";

const HeaderPage = ({ image }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-bg">
          <img src={image} alt="Background_Image" />
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
