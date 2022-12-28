import React from "react";
import "./Competition.css";
import CompetitionImage from "../../assets/img/banner/banner-competition.jpg";
import HeaderPage from "../../components/headerPage/HeaderPage";
import NavbarCompetition from "../../components/navbarCompetition/NavbarCompetition";
import FixturesCompetition from "../../components/fixturesCompetition/FixturesCompetition";
import RankCompetition from "../../components/rankCompetition/RankCompetition";
import { useState } from "react";

const Competition = () => {

  const [isShowRank, setIsShowRank] = useState(true);
  
  const setShowRank = (e) => {
    setIsShowRank(e);
  }

  return (
    <div>
      <HeaderPage image={CompetitionImage}></HeaderPage>
      <section className="competition__story">
        <div className="container competition__story-container">
          <NavbarCompetition setShowRank={setShowRank} isShowRank={isShowRank}/>
          {
            isShowRank ? <RankCompetition/> : <FixturesCompetition />
          }          
          {/* <RankCompetition/> */}
        </div>
      </section>
    </div>
  );
};

export default Competition;
