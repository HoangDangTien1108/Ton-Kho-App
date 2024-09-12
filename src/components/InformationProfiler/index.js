import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { closeMenu, selectMenu } from "../../redux/actions";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/HomeIcon";
import SupportIcon from "../../assets/icons/SupportIcon";
import TransportIcon from "../../assets/icons/TransportIcon";
import AdministrationIcon from "../../assets/icons/AdministrationIcon";
import InventoryIcon from "../../assets/icons/InventoryIcon";
import SelectIcon from "../../assets/icons/SelectIcon";

const InformationProfiler = (props) => {
  const openmenu = useSelector((state) => state.openmenu);
  const dispatch = useDispatch();
  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };
  return (
    <div className={`infor ${openmenu ? "open_menu" : "close_menu"}`}>
      <div className="infor_content">
        <div className="infor_main">
          <div className="image"></div>
          <div className="infor_profiler">
            <h4>User Name</h4>
            <p>abcxyz@gmail.com</p>
            <p style={{ paddingTop: "2px" }}>ID: 101010</p>
          </div>
        </div>
        <button
          onClick={handleCloseMenu}
          style={{ width: "32px", height: "32px" }}
        >
          {props.btCloseMenu}
        </button>
      </div>
      <div className="editOrselect">
        <div className="select_menu">
          <MainMenu />
        </div>
      </div>
    </div>
  );
};

export default InformationProfiler;

export const MainMenu = (props) => {
  const dispatch = useDispatch();
  const handleSelectMenu = () => {
    dispatch(selectMenu());
  };

  return (
    <div className="MainMenu">
      <ul>
        <li>
          <Link to="/" onClick={handleSelectMenu} className="menu-link">
            <div className="left">
              <HomeIcon />
              <p>Trang chủ</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/ho-tro" onClick={handleSelectMenu} className="menu-link">
            <div className="left">
              <SupportIcon />
              <p>Hỗ trợ</p>
            </div>
            <div className="right">
              <SelectIcon />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/van-chuyen" onClick={handleSelectMenu} className="menu-link">
            <div className="left">
              <TransportIcon />
              <p>Vận chuyển</p>
            </div>
            <div className="right">
              <SelectIcon />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/quan-tri" onClick={handleSelectMenu} className="menu-link">
            <div className="left">
              <AdministrationIcon />
              <p>Quản trị</p>
            </div>
            <div className="right">
              <SelectIcon />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/ton-kho" onClick={handleSelectMenu} className="menu-link">
            <div className="left">
              <InventoryIcon />
              <p>Tồn kho</p>
            </div>
            <div className="right">
              <SelectIcon />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
