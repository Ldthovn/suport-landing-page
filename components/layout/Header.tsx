import Link from "next/link";
import React from "react";
import styles from "./layout.module.scss";

const Header: React.FC = (props) => {
  return (
    <header className={`${styles["header"]} fixed`}>
      <nav className={`flex items-center container`}>
        <Link href="/">
          <a className={`${styles["link-right"]}`}>Nóng</a>
        </Link>
        <Link href="/tin-moi">
          <a className={`${styles["link-right"]}`}>Mới</a>
        </Link>
        <Link href="/tin-video">
          <a className={`${styles["link-right"]}`}>Video</a>
        </Link>
        <Link href="/chu-de">
          <a className={`${styles["link-right"]}`}>Chủ đề</a>
        </Link>
        <Link href="/phong-chong-dich-covid-19">
          <a className={`${styles["link-left"]}`}>Phòng chống dịch COVID-19</a>
        </Link>
        <Link href="/nang-luong-tich-cuc">
          <a className={`${styles["link-left"]}`}>Năng lượng tích cực</a>
        </Link>
        <Link href="/kham-pha-viet-nam">
          <a className={`${styles["link-left"]}`}>Khám phá Việt Nam</a>
        </Link>
        <Link href="/kham-pha-the-gioi">
          <a className={`${styles["link-left"]}`}>Khám phá thế giới</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
