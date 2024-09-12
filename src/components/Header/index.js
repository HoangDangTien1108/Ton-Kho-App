import Menu from "../Menu";
import Profiler from "../Profiler";
import HeaderImage from "../../assets/images/Header.png";
import "./style.css";

const Header = () => {
  return (
    <>
      <div
        className="header"
        style={{
          backgroundImage: `url(${HeaderImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "200px",
        }}
      >
        <div className="header_top">
          <Menu />
          <span style={{ color: "white" }}>Tồn Kho TOKYOLIFE</span>
          <Profiler />
        </div>
      </div>
    </>
  );
};

export default Header;
