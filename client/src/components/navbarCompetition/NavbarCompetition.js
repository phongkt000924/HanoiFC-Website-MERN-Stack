import React from "react";
import "./NavbarCompetition.css";

const NavbarCompetition = ({ isShowRank, setShowRank }) => {
  return (
    <div className="competition__section-head">
      <div className="competition__section-head-nav">
        <ul>
          <li>
            <span
              onClick={() => {
                setShowRank(false);
              }}
              className={isShowRank ? "" : "active"}
            >
              Lịch thi đấu và kết quả
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setShowRank(true);
              }}
              className={isShowRank ? "active" : ""}
            >
              Bảng xếp hạng
            </span>
          </li>
        </ul>
      </div>

      <div className="competition__section-head-content">
        <div className="competition__section-head-title">
          <span className="title">
            {isShowRank ? "Bảng xếp hạng" : "Lịch thi đấu và kết quả"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarCompetition;
