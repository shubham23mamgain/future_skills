/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import Popup from "./Popup";

const Layout = ({ orderPopup, setOrderPopup, handleOrderPopup }) => {
  return (
    <div className="bg-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Header />
      <Outlet />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default Layout;
