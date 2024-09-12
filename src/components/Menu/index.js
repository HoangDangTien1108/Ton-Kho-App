import "./style.css";
import MenuIcon from "../../assets/icons/MenuIcon";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../redux/actions";
import InformationProfiler from "../InformationProfiler";
import CloseMenuIcon from "../../assets/icons/CloseMenuIcon";

const Menu = (props) => {
  const openmenu = useSelector((state) => state.openmenu);
  const dispatch = useDispatch();
  const handleMenuOpen = () => {
    dispatch(openMenu());
  };

  return (
    <>
      <button onClick={handleMenuOpen}>
        <MenuIcon />
      </button>
      <InformationProfiler btCloseMenu={<CloseMenuIcon />} />
    </>
  );
};

export default Menu;
