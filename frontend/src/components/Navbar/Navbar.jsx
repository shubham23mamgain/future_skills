/* eslint-disable react/prop-types */
import Logo from "../../assets/ui.png";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./Responsive";
import AppSearchForm from "../AppSearchForm";

export const NavbarLinks = [
  {
    name: "Abstract",
    link: "/",
  },
  {
    name: "Help Center",
    link: "/help",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const handleSearchSubmit = (query) => {
    navigate("/cards/search?title=" + query);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-black  backdrop-blur-sm text-white shadow-md">
        <div className="container py-3 sm:py-0 mb-3">
          <div className="flex justify-between items-center">
            <div
              className="flex items-center gap-4  font-bold text-2xl"
              data-aos="fade-right"
            >
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="logo" width="35px" height="35px" />
              </Link>

              <div className="hidden md:block " data-aos="zoom-in">
                <ul className="flex items-center gap-2 ">
                  <li className="py-2 text-base ">
                    <NavLink to="/" className="">
                      Abstract
                    </NavLink>
                  </li>
                  <li className="text-base">| </li>
                  <li className="py-2 text-base">
                    <NavLink to="/help">Help Center</NavLink>
                  </li>

                  <li>
                    <AppSearchForm
                      placeholder="Search Cards By Title"
                      inputClassName="border-dark-subtle text-white focus:border-white sm:w-auto w-40 sm:text-lg"
                      onSubmit={handleSearchSubmit}
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-2" data-aos="fade-left">
              <button
                className="bg-black  border-solid border-2 border-blue-100 hover:bg-primary  text-white  px-3 py-1 rounded-md"
                onClick={() => {
                  // console.log("Hi");
                  handleOrderPopup();
                }}
              >
                Submit a Request
              </button>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
