import React, { useEffect, useState } from "react";
import "./RankCompetition.css";
import axios from "axios";

const RankCompetition = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    handleGetAllStading(2022);
  }, []);

  const handleGetAllStading = async (year) => {
    const standing = await axios.post("http://localhost:9000/api/allstanding", {
      year: year,
    });
    setTeam(standing.data.standing);
  };

  return (
    <div className="competition__section-rank">
      <div className="competition__section-rank-select">
        <select
          onChange={(e) => {
            handleGetAllStading(e.target.value);
          }}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </select>
      </div>

      <table className="competition__section-rank-table">
        <thead>
          <tr>
            <th colSpan={2}>
              <span>Câu lạc bộ</span>
            </th>
            <th>
              <span className="competition__section-rank-normal">Đã đấu</span>
              <span className="competition__section-rank-mobile">P</span>
            </th>
            <th>
              <span className="competition__section-rank-normal">Thắng</span>
              <span className="competition__section-rank-mobile">W</span>
            </th>
            <th>
              <span className="competition__section-rank-normal">Thua</span>
              <span className="competition__section-rank-mobile">L</span>
            </th>
            <th>
              <span className="competition__section-rank-normal">Hòa</span>
              <span className="competition__section-rank-mobile">D</span>
            </th>
            <th>
              <span className="competition__section-rank-normal">Hiệu số</span>
              <span className="competition__section-rank-mobile">GD</span>
            </th>
            <th className="competition__section-rank-point">
              <span className="competition__section-rank-normal">Điểm</span>
              <span className="competition__section-rank-mobile">PTS</span>
            </th>
            {/* <th>
              <span>5 trận gần nhất</span>
            </th> */}
          </tr>
        </thead>
        <tbody>
          {team &&
            team.map((item) => (
              <tr key={item._id}>
                <th>
                  <span>{item.rating}</span>
                </th>
                <th>
                  <img src={item.imageclub} alt={item.nameclub} />
                  <span>{item.nameclub}</span>
                </th>
                <th>
                  <span>{item.matches}</span>
                </th>
                <th>
                  <span>{item.win}</span>
                </th>
                <th>
                  <span>{item.draw}</span>
                </th>
                <th>
                  <span>{item.lose}</span>
                </th>
                <th>
                  <span>{item.numberofgoal}</span>
                </th>
                <th className="competition__section-rank-point">
                  <span>{item.point}</span>
                </th>
                {/* <th>
              <span className="competition__section-rank-match win">
                <IoMdCheckmark />
              </span>
              <span className="competition__section-rank-match lose">x</span>
              <span className="competition__section-rank-match draw">--</span>
              <span className="competition__section-rank-match draw">--</span>
              <span className="competition__section-rank-match win">
                <IoMdCheckmark />
              </span>
            </th> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankCompetition;
