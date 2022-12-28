import React from "react";
import HeaderPage from "../../components/headerPage/HeaderPage";
import AboutImage from "../../assets/img/banner/banner-2.jpg";
import logo from "../../assets/img/logo/logo.png";
import cup from "../../assets/img/cup/cup-giai-thuong.jpg";
import "./About.css";
import Testimonials from "./testimonials/Testimonials";
import Stadium from "./stadium/Stadium";

const About = () => {
  return (
    <div>
      <HeaderPage image={AboutImage}></HeaderPage>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={logo} alt="HanoiFC" />
          </div>
          <div className="about__section-content">
            <p>
              Dưới sự tài trợ của Tập đoàn T&T, câu lạc bộ Hà Nội – T&T thành
              lập vào ngày 18 tháng 6 năm 2006. 03 mùa giải đầu tiên, từ một đội
              bóng gồm đa số các cầu thủ trẻ do huấn luyện viên Triệu Quang Hà
              (cựu cầu thủ đội tuyển bóng đá Việt Nam và câu lạc bộ Thể Công)
              dẫn dắt đã liên tiếp thăng ba hạng, từ hạng Ba lên hạng chuyên
              nghiệp, giành quyền thi đấu ở đấu trường danh giá nhất Việt Nam
              V-League 2009.
            </p>
            <p>
              Bước vào mùa giải 2010, đội bóng Thủ đô có sự thay đổi trên băng
              ghế huấn luyện, ông Phan Thanh Hùng – trợ lý số 1 của HLV Calisto
              được mời về với mục tiêu đoạt chức vô địch để dành tặng người hâm
              mộ nhân dịp Đại lễ 1000 năm Thăng Long – Hà Nội. Sự đồng lòng,
              quyết tâm của toàn thể thành viên đội bóng đã đưa Hà Nội –T&T bay
              cao và bước lên ngôi vị cao nhất lần đầu tiên chỉ sau 1 năm góp
              mặt ở sân chơi cao nhất Việt Nam. Đồng thời, chiếc cúp vô địch còn
              có ý nghĩa giải tỏa cơn khát danh hiệu của những người yêu bóng đá
              Hà Thành sau 26 năm chờ đợi (Công An Hà Nội – 1984).
            </p>
            <p>
              Kể từ thời điểm đó, Hà Nội – T&T trở thành đội bóng đáng xem nhất
              của bóng đá Việt Nam, được biết đến bởi phong cách chơi đặc trưng
              là “ kiểm soát bóng, phối hợp trong phạm vi hẹp” áp dụng trong
              toàn hệ thống đào tạo của Câu lạc bộ. Sau 15 năm bước lên chuyên
              nghiệp, đại diện Thủ đô đã sưu tầm đầy đủ tất cả danh hiệu từ cấp
              độ đội I tới các lứa trẻ thuộc hệ thống thi đấu Quốc gia.{" "}
            </p>
            <p>
              Năm 2016 nhân dịp kỷ niệm sinh nhật lần thứ 10, Ủy ban Nhân dân
              Thành phố Hà Nội đồng ý cho phép đội bóng đổi tên Hà Nội – T&T
              sang Câu lạc bộ bóng đá Hà Nội và giao toàn quyền quản lý, sử dụng
              sân vận động Hàng Đãy, với mong muốn đội bóng thể hiện cho ý chí
              và sức mạnh của nhân dân Thủ đô ngàn năm văn hiến.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__vision-image">
            <img src={cup} alt="CupHanoiFC" />
          </div>
        </div>
      </section>
      <Testimonials/>
      <Stadium/>
    </div>
  );
};

export default About;
