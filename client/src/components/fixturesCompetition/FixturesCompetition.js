import React, { useEffect, useState } from "react";
import "./FixturesCompetition.css";
// import logoVleague from "../../assets/img/logo/logo-vleague.png";
import axios from "axios";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import DetailsFixtureCompetition from "../detailsFixtureCompetition/DetailsFixtureCompetition";
// import { useState } from "react";

const FixturesCompetition = () => {
  // const [isShowDetails, setIsShowDetails] = useState(false);

  const [fixture, setFixture] = useState([]);

  useEffect(() => {
    handleGetAllFixtures(2022);
  }, []);

  const handleGetAllFixtures = async (year) => {
    const fixture = await axios.post("http://localhost:9000/api/allfixtures", {
      year: year,
    });

    setFixture(fixture.data.fixture);
  };

  return (
    <div className="competition__section-fixtures">
      <div className="competition__section-fixtures-select">
        <select
          onChange={(e) => {
            handleGetAllFixtures(e.target.value);
          }}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>

      {fixture &&
        fixture.map((item) => (
          <div
            className="competition__section-fixture-row"
            // onClick={() => setIsShowDetails(!isShowDetails)}
            key={item._id}
          >
            <div className="competition__section-fixture-col--schedule">
              {/* <div className="competition__section-fixture-col--schedule-logo">
            <img src={logoVleague} alt="V League 1" />
          </div> */}
              <div className="competition__section-fixture-col--schedule-info">
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  VÒNG {item.tournaments_match}
                </p>
                <p>
                  {item.tournaments_year} - {item.tournaments_name}
                </p>
                <p style={{textAlign: "center"}}>{item.datetimes}</p>
                <p style={{textAlign: "center"}}>SVĐ: {item.stadium}</p>
              </div>
            </div>

            <div className="competition__section-fixture-col--competitor">
              <div className="competition__section-fixture-col--competitor--left">
                <p>{item.nameclubhome}</p>
                <img src={item.imageclubhome} alt={item.nameclubhome} />
              </div>
              <div className="competition__section-fixture-col--competitor--center">
                <span>{item.scorehome}</span>
                <span>:</span>
                <span>{item.scoreaway}</span>
              </div>
              <div className="competition__section-fixture-col--competitor--right">
                <img src={item.imageclubaway} alt={item.nameclubaway} />
                <p>{item.nameclubaway}</p>
              </div>
            </div>

            <div className="competition__section-fixture-col--result">
              {/* <span>D</span>
          <button className="btn-show-toggle">
            <MdKeyboardArrowDown />
          </button> */}
            </div>
          </div>
        ))}
      {/* {isShowDetails && <DetailsFixtureCompetition />} */}
    </div>
  );
};

export default FixturesCompetition;
