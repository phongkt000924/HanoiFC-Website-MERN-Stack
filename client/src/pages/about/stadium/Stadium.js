import React from "react";
import "./Stadium.css"
import nameStadium from "../../../assets/img/svd/svd-hang-day.png"
import avatarStadium from "../../../assets/img/svd/svd-hang-day.jpg"

const Stadium = () => {
  return (
    <section className="stadium">
      <div className="container stadium__container">
        <div className="stadium__image">
          <div className="stadium__info">
            <img src={nameStadium} alt="" />
          </div>
          <div className="stadium__avatar">
            <img src={avatarStadium} alt="HangDay Stadium" />
          </div>
        </div>

        <div className="stadium__content">
          <p>
            Sân vận động Hàng Đẫy được xây dựng từ năm 1937, ban đầu chỉ là bãi
            đất trống với diện tích khiêm tốn. Đến ngày 24/8/1958, khu vực này
            được cải tạo xây dựng và khánh thành sau 01 năm xây dựng, diện tích
            21.844 m2. Năm 1995, sân vận động được cải tạo thêm lần nữa và có
            diện mạo như ngày nay. Sân vận động có sức chứa 20.000 chỗ ngồi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stadium;
