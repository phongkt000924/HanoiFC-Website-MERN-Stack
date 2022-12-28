import React from "react";
import "./DetailsFixtureCompetition.css";

import logoHaNoiFC from "../../assets/img/logo/logo.png";
import logoHAGL from "../../assets/img/logo/hoang-anh-gia-lai2.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const DetailsFixtureCompetition = () => {
  return (
    <div className="competition__section-detailsfixtures">
      <div className="competition__section-detailsfixture-row">
        <div className="competition__section-detailsfixture-col--schedule">
          <div className="competition__section-detailsfixture-col--schedule-info">
            <p>2022 V.League 1</p>
            <p>12/03/2022 - 19:15</p>
            <p>Hàng Đẫy</p>
          </div>
        </div>

        <div className="competition__section-detailsfixture-col--competitor">
          <div className="competition__section-detailsfixture-row--competitor-top">
            <div className="competition__section-detailsfixture-col--competitor--left">
              <div className="competition__section-detailsfixture-row--competition--left-top">
                <img src={logoHaNoiFC} alt="HaNoiFC" />
                <p>Hà Nội</p>
              </div>
            </div>
            <div className="competition__section-detailsfixture-col--competitor--center">
              <span>4</span>
              <span>:</span>
              <span>0</span>
            </div>
            <div className="competition__section-detailsfixture-col--competitor--right">
              <div className="competition__section-detailsfixture-row--competition--left-top">
                <img src={logoHAGL} alt="HAGLFC" />
                <p>Hoàng Anh Gia Lai</p>
              </div>
            </div>
          </div>
          <div className="competition__section-detailsfixture-row--competitor-bottom">
            <div className="competition__section-detailsfixture-col--competitor--left">
              <div className="competition__section-detailsfixture-row--competition--left-bottom">
                <span>Tuấn Hải 32' 64'</span>
                <span>Bui hoang viet anh 32' 64'</span>
              </div>
            </div>
            <div className="competition__section-detailsfixture-col--competitor--center"></div>
            <div className="competition__section-detailsfixture-col--competitor--right">
              <div className="competition__section-detailsfixture-row--competition--left-bottom">
                <span>Nguyen Phong Hong Duy 12'</span>
                <span>Cong Phuong 12'</span>
                <span>Cong Phuong 12'</span>
                <span>Cong Phuong 12'</span>
              </div>
            </div>
          </div>
        </div>

        <div className="competition__section-detailsfixture-col--result">
          <button className="btn-hide-toggle">
            <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsFixtureCompetition;
