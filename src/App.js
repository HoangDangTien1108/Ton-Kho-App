import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import HomeIcon from "./assets/icons/HomeIcon";
import SupportIcon from "./assets/icons/SupportIcon";
import TransportIcon from "./assets/icons/TransportIcon";
import AdministrationIcon from "./assets/icons/AdministrationIcon";
import InventoryIcon from "./assets/icons/InventoryIcon";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const selectmenu = useSelector((state) => state.selectmenu);
  return (
    <div className="App">
      <div
        className="content_App"
        style={{ display: selectmenu ? "none" : "flex" }}
      >
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomeIcon />} />
        <Route path="/ho-tro" element={<SupportIcon />} />
        <Route path="/van-chuyen" element={<TransportIcon />} />
        <Route path="/quan-tri" element={<AdministrationIcon />} />
        <Route path="/ton-kho" element={<InventoryIcon />} />
      </Routes>
    </div>
  );
}

export default App;
