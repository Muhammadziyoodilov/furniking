import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  const [isCatOpen, setCatOpen] = useState(false);
  return (
    <>
      <header className="header py-[24px]">
        <div className="container header-container flex items-center justify-between">
          <a href="#" className="logo-link">
            <img src="/images/svg/Logo.svg" alt="" className="logo-img" />
          </a>
          <div className="header-input-wrp flex">
            <nav
              className={
                isCatOpen == false ? "catigories" : "catigories active"
              }
            >
              <ul className="catigories-list">
                <li className="catigories-item">
                  <a href="#" className="catigories-link">
                    Furniture Hardware
                  </a>
                </li>
                <li className="catigories-item">
                  <a href="#" className="catigories-link">
                    Construction Hardware
                  </a>
                </li>
                <li className="catigories-item">
                  <a href="#" className="catigories-link">
                    Window and Door Hardware
                  </a>
                </li>
                <li className="catigories-item">
                  <a href="#" className="catigories-link">
                    Fasteners and Fixings
                  </a>
                </li>
                <li className="catigories-item">
                  <a href="#" className="catigories-link">
                    Curtain and Drapery Hardware
                  </a>
                </li>
                <li className="catigories-item">
                  <a href="#" className="catigories-link">
                    Decorative Hardware
                  </a>
                </li>
              </ul>
            </nav>
            <input
              type="text"
              className="header-input"
              placeholder="Search here"
            />
            <div className="header-line w-[1px] h-[42px] bg-[#E3E3E3C7]"></div>
            <a
              href="#"
              className="input-link flex items-center gap-[13px]"
              onClick={() => {
                setCatOpen(!isCatOpen);
              }}
            >
              Categories{" "}
              <IoIosArrowDown
                className={
                  isCatOpen == false ? "header-arrow" : "header-arrow rotate"
                }
              />
            </a>
            <button className="search-buttom px-[24px]">
              <img
                width={16}
                height={16}
                src="/images/svg/zoom-2 1.svg"
                alt=""
                className="search-img"
              />
            </button>
          </div>
          <div className="header-icons-wrp flex items-center gap-[25px]">
            <a href="#" className="header-icons-link">
              <img
                src="/images/svg/header-icons/Vector.svg"
                alt=""
                className="header-icons"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="header-icons-link">
              <img
                src="/images/svg/header-icons/Notification.svg"
                alt=""
                className="header-icons"
                width={26}
                height={26}
              />
            </a>
            <a href="#" className="header-icons-link">
              <img
                src="/images/svg/header-icons/avatar 1.svg"
                alt=""
                className="header-icons"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
