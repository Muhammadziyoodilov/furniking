import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <>
      <div className="navbar bg-[#F7F8FA]">
        <div className="container navbar-container flex justify-between items-center">
          <nav className={isOpen == true ? "sitemenu active" : "sitemenu"}>
            <ul className="sitemenu-list">
              <li className="sitemenu-item">
                <a href="#" className="sitemenu-link">
                  All
                </a>
              </li>
              <li className="sitemenu-item">
                <a href="#" className="sitemenu-link">
                  New Arrivals
                </a>
              </li>
              <li className="sitemenu-item">
                <a href="#" className="sitemenu-link">
                  Hot Sale
                </a>
              </li>
              <li className="sitemenu-item">
                <a href="#" className="sitemenu-link">
                  Furniture
                </a>
              </li>
              <li className="sitemenu-item">
                <a href="#" className="sitemenu-link">
                  Amrature
                </a>
              </li>
              <li className="sitemenu-item">
                <a href="#" className="sitemenu-link">
                  Tabble
                </a>
              </li>
              <li className="sitemenu-item">
                <a href="#" className="sitemenu-link">
                  Chair
                </a>
              </li>
              <li className="sitemenu-item">
                <a href="#" className="sitemenu-link">
                  Sofa
                </a>
              </li>
              <li className="sitemenu-item">
                <a href="#" className="sitemenu-link">
                  Mirrors
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="navbar-btn flex items-center gap-[20px]"
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            <img
              width={24}
              height={24}
              src="../../../public/images/svg/menu 1.svg"
              alt=""
              className="navbar-burger"
            />
            ALL COLLECTIONS
          </button>
          <nav className="sitenav">
            <ul className="sitenav-list">
              <li className="sitenav-item">
                <a href="#" className="sitenav-link">
                  HOME
                </a>
              </li>
              <li className="sitenav-item">
                <a href="#" className="sitenav-link">
                  SHOP
                </a>
              </li>
              <li className="sitenav-item">
                <a href="#" className="sitenav-link">
                  BLOG
                </a>
              </li>
              <li className="sitenav-item">
                <a href="#" className="sitenav-link">
                  ABOUT
                </a>
              </li>
              <li className="sitenav-item">
                <a href="#" className="sitenav-link">
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
