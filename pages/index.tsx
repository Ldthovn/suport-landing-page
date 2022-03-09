/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout";
import styles from "../styles/home.module.scss";
import { dataLeft, dataRight } from "./mockData";

const Home = () => {
  return (
    <Layout>
      <div className="container" style={{ paddingTop: 41 }}>
        <div className={`${styles["banner"]} py-4`}>
          <div className={`${styles["banner-left"]}`}>
            <div className={styles["banner-left-hover"]}>
              <a
                href="https://baomoi.com/ap-my-sap-ban-hanh-lenh-cam-nhap-khau-dau-mo-nga/c/41965861.epi"
                target="_blank"
                rel="noreferrer"
                className="overflow-hidden"
              >
                <img
                  src="https://photo-baomoi.zadn.vn/w700_r16x9_sm/2022_03_08_65_41965861/e7fbd6d8479aaec4f78b.jpg"
                  alt=""
                  className={`${styles["banner-left-img"]} rounded`}
                />
              </a>
              <a
                href="https://baomoi.com/ap-my-sap-ban-hanh-lenh-cam-nhap-khau-dau-mo-nga/c/41965861.epi"
                target="_blank"
                rel="noreferrer"
                className="text-4xl"
              >
                AP: Mỹ sắp ban hành lệnh cấm nhập khẩu dầu mỏ Nga
              </a>
              <a
                href="https://baomoi.com/ap-my-sap-ban-hanh-lenh-cam-nhap-khau-dau-mo-nga/c/41965861.epi"
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                <img
                  src="https://photo-baomoi.zadn.vn/d59db7f26ab183efdaa0.png"
                  alt="Zing"
                  className="h-4 w-auto"
                />
                <div className="text-xs ml-2" style={{ color: "#adb5bd" }}>
                  2 giờ
                </div>
              </a>
            </div>
            <div
              className={`grid grid-cols-3 gap-4 my-4 pb-4`}
              style={{ borderBottom: "1px solid #ddd" }}
            >
              {dataLeft.map((el, index) => {
                return (
                  <div key={index} className={styles["banner-left-hover"]}>
                    <a
                      href={el.link}
                      target="_blank"
                      rel="noreferrer"
                      className="overflow-hidden"
                    >
                      <img
                        src={el.img}
                        alt=""
                        className={`${styles["banner-left-img"]} rounded`}
                      />
                    </a>
                    <a
                      href={el.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl"
                    >
                      {el.title}
                    </a>
                    <a
                      href={el.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex"
                    >
                      <img src={el.icon} alt="Zing" className="h-4 w-auto" />
                      <div
                        className="text-xs ml-2"
                        style={{ color: "#adb5bd" }}
                      >
                        {el.time}
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`${styles["banner-right"]}`}>
            {dataRight.map((el, index) => {
              return (
                <div
                  key={index}
                  className={`${styles["banner-right-hover"]} flex`}
                >
                  <a
                    href={el.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ width: 60, height: 60 }}
                  >
                    <img
                      src={el.img}
                      alt=""
                      style={{ width: 60, height: 60, marginTop: 8 }}
                      className={`${styles["banner-left-img"]} rounded`}
                    />
                  </a>
                  <div className="pl-4" style={{ width: "calc(100% - 61px)" }}>
                    <a
                      href={el.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl"
                    >
                      {el.title}
                    </a>
                    <a
                      href={el.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex"
                    >
                      <img src={el.icon} alt="Zing" className="h-4 w-auto" />
                      <div
                        className="text-xs ml-2"
                        style={{ color: "#adb5bd" }}
                      >
                        {el.time}
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
