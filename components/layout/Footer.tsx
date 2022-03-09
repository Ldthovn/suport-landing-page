import React from "react";
import styles from "./layout.module.scss";

const Footer: React.FC = (props) => {
  return (
    <footer className="mb-4">
      <div style={{ background: "#2fa1b3" }}>
        <div className="container">
          <div className={`${styles["footer-header"]} `}>
            <a
              href="https://baomoi.com"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex">
            <ul className="mr-10">
              <h4 className="uppercase">Liên hệ</h4>
              <li className="text-sm">
                <a href="https://baomoi.com/staticpages/intro.epi" target='_blank' rel="noreferrer">
                  Giới thiệu
                </a>
              </li>
              <li className="text-sm">
                <a href="https://baomoi.com/staticpages/termsofuse.epi" target='_blank' rel="noreferrer">
                  Điều khoản sử dụng
                </a>
              </li>
              <li className="text-sm">
                <a href="https://adtima.vn/lien-he?utm_source=baomoi&utm_medium=footer" target='_blank' rel="noreferrer">
                  Quảng cáo
                </a>
              </li>
            </ul>
            <ul>
              <h4 className="uppercase">Khác</h4>
              <li className="text-sm">
                <a href="https://baomoi.com/staticpages/intro.epi" target='_blank' rel="noreferrer">Tổng hợp</a>
              </li>
            </ul>
          </div>
          <div className="text-sm" style={{ color: "#757575" }}>
            <div>
              Giấy phép số 1818/GP-TTĐT do Sở Thông tin và Truyền thông Hà Nội
              cấp ngày 05/05/2017
            </div>
            <div>
              Đơn vị chủ quản: Công ty Cổ phần Công nghệ EPI * Chịu trách nhiệm:
              Võ Quang
            </div>
            <div>
              Địa chỉ: Tầng 5, Tòa nhà Báo Sinh Viên VN, D29 Phạm Văn Bạch, Yên
              Hòa, Cầu Giấy, Hà Nội
            </div>
            <div>
              Tel: (024) 3-212-3232, số máy lẻ 6666. contact.baomoi@epi.com.vn
            </div>
            <div>BÁO MỚI tổng hợp và sắp xếp các thông tin tự động</div>
            <div>bởi chương trình máy tính</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
