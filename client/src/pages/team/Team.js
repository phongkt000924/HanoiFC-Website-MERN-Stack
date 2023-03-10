import React, { useEffect, useState } from "react";
import HeaderPage from "../../components/headerPage/HeaderPage";
import TeamImage from "../../assets/img/banner/slide-2.jpg";
import "./Team.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Team = () => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    handleGetAllPlayers(2022);
  }, []);

  const handleGetAllPlayers = async (year) => {
    const player = await axios.post("http://localhost:9000/api/allplayers", {
      year: year,
    });
    setPlayer(player.data.player);
  };

  return (
    <section className="team__story">
      <HeaderPage image={TeamImage}></HeaderPage>

      <div className="container team__story-container">
        <div className="team__story-container-select">
          <select
            onChange={(e) => {
              handleGetAllPlayers(e.target.value);
            }}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>

        <div className="team__player-row">
          {player &&
            player.map((item) => (
              <Link
                className="team__player-col"
                key={item._id}
                to={"/player/" + item._id}
              >
                <div className="team__player-info-top">
                  <span className="team__player-number">{item.number}</span>
                  <div className="team__player-info-top-content">
                    <span className="team__player-name">{item.fullname}</span>
                    <span className="team__player-venue">{item.position}</span>
                  </div>
                </div>
                <div className="team__player-img">
                  <img src={item.image} alt={item.fullname} />
                </div>
                <div className="team__player-info-bottom">
                  <div className="team__player-row-info">
                    <p className="team__player-col-info">Ng??y sinh</p>
                    <p className="team__player-col-info">{item.born}</p>
                  </div>
                  <div className="team__player-row-info">
                    <p className="team__player-col-info">Chi???u cao</p>
                    <p className="team__player-col-info">{item.height} cm</p>
                  </div>
                  <div className="team__player-row-info">
                    <p className="team__player-col-info">C??n n???ng</p>
                    <p className="team__player-col-info">{item.weight} kg</p>
                  </div>
                  <div className="team__player-row-info">
                    <p className="team__player-col-info">Qu?? Qu??n</p>
                    <p className="team__player-col-info">{item.address}</p>
                  </div>
                </div>
              </Link>
            ))}

          {/* <div className="team__player-col">
            <div className="team__player-info-top">
              <span className="team__player-number">25</span>
              <div className="team__player-info-top-content">
                <span className="team__player-name">l?? xu??n t??</span>
                <span className="team__player-venue">Th??? m??n</span>
              </div>
            </div>
            <div className="team__player-img">
              <img src={TT} alt="TT" />
            </div>
            <div className="team__player-info-bottom">
              <div className="team__player-row-info">
                <p className="team__player-col-info">Ng??y sinh</p>
                <p className="team__player-col-info">19/02/1986</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Chi???u cao</p>
                <p className="team__player-col-info">188 cm</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">C??n n???ng</p>
                <p className="team__player-col-info">88 kg</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Qu?? Qu??n</p>
                <p className="team__player-col-info">?????ng Th??p</p>
              </div>
            </div>
          </div>
          <div className="team__player-col">
            <div className="team__player-info-top">
              <span className="team__player-number">74</span>
              <div className="team__player-info-top-content">
                <span className="team__player-name">tr????ng v??n th??i qu??</span>
                <span className="team__player-venue">Ti???n v???</span>
              </div>
            </div>
            <div className="team__player-img">
              <img src={TT} alt="TT" />
            </div>
            <div className="team__player-info-bottom">
              <div className="team__player-row-info">
                <p className="team__player-col-info">Ng??y sinh</p>
                <p className="team__player-col-info">19/02/1986</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Chi???u cao</p>
                <p className="team__player-col-info">188 cm</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">C??n n???ng</p>
                <p className="team__player-col-info">88 kg</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Qu?? Qu??n</p>
                <p className="team__player-col-info">?????ng Th??p</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="team__player-row">
          <div className="team__player-col">
            <div className="team__player-info-top">
              <span className="team__player-number">1</span>
              <div className="team__player-info-top-content">
                <span className="team__player-name">B??i T???n Tr?????ng</span>
                <span className="team__player-venue">Th??? m??n</span>
              </div>
            </div>
            <div className="team__player-img">
              <img src={TT} alt="TT" />
            </div>
            <div className="team__player-info-bottom">
              <div className="team__player-row-info">
                <p className="team__player-col-info">Ng??y sinh</p>
                <p className="team__player-col-info">19/02/1986</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Chi???u cao</p>
                <p className="team__player-col-info">188 cm</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">C??n n???ng</p>
                <p className="team__player-col-info">88 kg</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Qu?? Qu??n</p>
                <p className="team__player-col-info">?????ng Th??p</p>
              </div>
            </div>
          </div>
          <div className="team__player-col">
            <div className="team__player-info-top">
              <span className="team__player-number">25</span>
              <div className="team__player-info-top-content">
                <span className="team__player-name">l?? xu??n t??</span>
                <span className="team__player-venue">Th??? m??n</span>
              </div>
            </div>
            <div className="team__player-img">
              <img src={TT} alt="TT" />
            </div>
            <div className="team__player-info-bottom">
              <div className="team__player-row-info">
                <p className="team__player-col-info">Ng??y sinh</p>
                <p className="team__player-col-info">19/02/1986</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Chi???u cao</p>
                <p className="team__player-col-info">188 cm</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">C??n n???ng</p>
                <p className="team__player-col-info">88 kg</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Qu?? Qu??n</p>
                <p className="team__player-col-info">?????ng Th??p</p>
              </div>
            </div>
          </div>
          <div className="team__player-col">
            <div className="team__player-info-top">
              <span className="team__player-number">74</span>
              <div className="team__player-info-top-content">
                <span className="team__player-name">tr????ng v??n th??i qu??</span>
                <span className="team__player-venue">Ti???n v???</span>
              </div>
            </div>
            <div className="team__player-img">
              <img src={TT} alt="TT" />
            </div>
            <div className="team__player-info-bottom">
              <div className="team__player-row-info">
                <p className="team__player-col-info">Ng??y sinh</p>
                <p className="team__player-col-info">19/02/1986</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Chi???u cao</p>
                <p className="team__player-col-info">188 cm</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">C??n n???ng</p>
                <p className="team__player-col-info">88 kg</p>
              </div>
              <div className="team__player-row-info">
                <p className="team__player-col-info">Qu?? Qu??n</p>
                <p className="team__player-col-info">?????ng Th??p</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Team;
