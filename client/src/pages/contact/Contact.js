import React from "react";
import HeaderPage from "../../components/headerPage/HeaderPage";
import ContactImage from "../../assets/img/banner/banner-contact.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact__story">
        <HeaderPage image={ContactImage}></HeaderPage>
        <div className="container contact__story-container">
          <div className="contact__section-content">
            <div className="contact__section-content-top">
              <h3>
                Hãy liên hệ với chúng tôi khi cần thông qua các địa chỉ liên hệ
                sau
              </h3>
              <p>CÂU LẠC BỘ BÓNG ĐÁ HÀ NỘI</p>
              <p>Số 9 Trịnh Hoài Đức – Đống Đa – Hà Nội</p>
              <p>Email : Support@hanoi-fc.com.vn</p>
              <p>Điện thoại: (+84) 867 861 650</p>
            </div>
            <div className="contact__section-content-bot">
              <table>
                <tr>
                  <td>Liên hệ</td>
                  <td>Phone</td>
                  <td>Email</td>
                </tr>
                <tr>
                  <td>Hợp tác tài trợ</td>
                  <td>(+84) 902 235 234</td>
                  <td>hadt1@hanoi-fc.com.vn</td>
                </tr>
                <tr>
                  <td>Hợp tác truyền thông</td>
                  <td>(+84) 911 105 556</td>
                  <td>anhdv1@hanoi-fc.com.vn</td>
                </tr>
                <tr>
                  <td>Kinh doanh hình ảnh cầu thủ</td>
                  <td>(+84) 949 888 896</td>
                  <td>trant@hanoi-fc.com.vn</td>
                </tr>
                <tr>
                  <td>Kinh doanh sản phẩm</td>
                  <td>(+84) 969 048 396</td>
                  <td>trinhnn@hanoi-fc.com.vn</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
