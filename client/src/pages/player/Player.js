import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeaderPage from "../../components/headerPage/HeaderPage";
import TeamImage from "../../assets/img/banner/slide-2.jpg";
import "./Player.css";
import { Link } from "react-router-dom";

const Player = () => {
  const { id } = useParams();

  const [player, setPlayer] = useState({});

  useEffect(() => {
    handleGetPlayer(id);
  }, [id]);

  const handleGetPlayer = async (id) => {
    const result = await axios.post("http://localhost:9000/api/getplayer", {
      id: id,
    });

    setPlayer(result.data.player[0]);
  };

  return (
    <section className="detail__player">
      <HeaderPage image={TeamImage}></HeaderPage>
      <div className="container detail__player-container">
        <Link to="/team" className="detail__player-back">
          TRỞ LẠI
        </Link>

        <div className="detail__player-content">
          <div className="detail__player-content-left">
            <img src={player.image} alt={player.fullname} />
          </div>

          <div className="detail__player-content-right">
            <div className="detail__player-row-info">
              <p className="detail__player-col-info">Tên cầu thủ</p>
              <p className="detail__player-col-info">{player.fullname}</p>
            </div>
            <div className="detail__player-row-info">
              <p className="detail__player-col-info">Vị trí</p>
              <p className="detail__player-col-info">{player.position}</p>
            </div>
            <div className="detail__player-row-info">
              <p className="detail__player-col-info">Ngày sinh</p>
              <p className="detail__player-col-info">{player.born}</p>
            </div>
            <div className="detail__player-row-info">
              <p className="detail__player-col-info">Chiều cao</p>
              <p className="detail__player-col-info">{player.height}</p>
            </div>
            <div className="detail__player-row-info">
              <p className="detail__player-col-info">Cân nặng</p>
              <p className="detail__player-col-info">{player.weight}</p>
            </div>
            <div className="detail__player-row-info">
              <p className="detail__player-col-info">Quê quán</p>
              <p className="detail__player-col-info">{player.address}</p>
            </div>
            <div className="detail__player-row-info">
              <p className="detail__player-col-info">Bài viết liên quan</p>
              <div className="detail__player-col-news">
                {Object.keys(player).length === 0 ? (
                  <></>
                ) : player.news.length === 0 ? (
                  <a
                    href="https://viblo.asia/p/react-router-v6-gGJ59oVpZX2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chưa có bài báo nào liên quan
                  </a>
                ) : (
                  player.news.map((item) => (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Player;
