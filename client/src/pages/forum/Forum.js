import React from "react";
import HeaderPage from "../../components/headerPage/HeaderPage";
import ForumImage from "../../assets/img/cdv/cvd-1.jpg";
import "./Forum.css";

const Forum = () => {
  return (
    <section className="forum__story">
      <HeaderPage image={ForumImage}></HeaderPage>
      <div className="container forum__story-container">
        <div className="forum__section-content">
          <div className="forum__section-content-top">
            <h1>DIỄN ĐÀN TRỰC TUYẾN</h1>
            <p>
              Bạn là người đam mê bóng đá và yêu thích CLB bóng đá Hà Nội? Bạn
              rất mong được bày tỏa sự đam mê của mình với tất cả mọi người? Bạn
              muốn trò chuyện, chia sẻ những câu chuyện của bản thân với CLB
              bóng đá mà bạn yêu thích? Bạn muốn có cơ hội được gặp thần tượng
              vào mỗi dịp cuối tuần và đăng những tấm hình của mình. Thế nhưng,
              bạn vẫn loay hoay mãi không tìm ra một diễn đàn uy tín về CLB mà
              mình yêu thích?
            </p>
            <p>
              Nhằm đáp ứng nguyện vọng ấy, CLB bóng đá Hà Nội cho ra mắt tính
              năng diễn đàn, đăng bày, trò truyện trực tuyến nhằm hỗ trợ người
              dùng tối ưu nhất.
            </p>
            <p>
              Hãy{" "}
              <a href="http://localhost:7000" target="_blank" rel="noreferrer">
                đăng ký tài khoản cho bản thân mình
              </a>{" "}
              để có thể tham gia vào diễn đàn để chia sẻ những câu chuyện, trò
              chuyện với người thân và bạn bè để đồng hành cùng CLB bóng đá Hà
              Nội.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
