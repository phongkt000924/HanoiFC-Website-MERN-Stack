import React from "react";
import HeaderPage from "../../components/headerPage/HeaderPage";
import StoreImage from "../../assets/img/banner/banner-buyticket.jpg";
import "./Store.css";
const Store = () => {
  return (
    <section className="store__story">
      <HeaderPage image={StoreImage}></HeaderPage>
      <div className="container store__story-container">
        <div className="store__section-content">
          <div className="store__section-content-top">
            <h1>MUA HÀNG TRỰC TUYẾN</h1>
            <p>
              Bạn là người đam mê bóng đá và yêu thích CLB bóng đá Hà Nội? Bạn
              rất mong có cơ hội được gặp thần tượng vào mỗi dịp cuối tuần và
              muốn sở hữu cho mình những sản phẩm từ CLB. Thế nhưng, không phải
              ai cũng may mắn có được tấm vé xem bóng đá, hay những sản phẩm từ
              CLB do bị “cháy” vé hoặc ngậm ngùi mua phải chỗ ngồi không ưng ý
              và mất uy tín?
            </p>
            <p>
              Nhằm đáp ứng nguyện vọng ấy, CLB bóng đá Hà Nội kết hợp với VNPAY
              cho ra mắt tính năng Mua vé bóng đá trực tuyến và sản phẩm từ CLB
              nhằm hỗ trợ người dùng tối ưu nhất.
            </p>
            <p>
              Hãy{" "}
              <a href="http://localhost:2000" target="_blank" rel="noreferrer">
                truy cập vào cửa hàng
              </a>{" "}
              để đặt những chiếc vé, những sản phẩm cho bạn cùng người thân và
              bạn bè để đồng hành cùng CLB bóng đá Hà Nội.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
