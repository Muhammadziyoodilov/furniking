import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-[115px]">
        <div className="container footer-container mb-[51px] flex justify-between">
          <div>
            <a href="#" className="footer-logo-link">
              <img
                src="/images/svg/Logo.svg"
                alt=""
                className="footer-logo mb-[15px]"
              />
              <p className="footer-info max-w-[318px] mb-[8px]">
                Funking is the a popular Ecommerce site. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <div className="flex items-center gap-[15px]">
                <a href="#">
                  <img src="/images/svg/pinterest.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/images/svg/pinterest.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/images/svg/pinterest.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/images/svg/pinterest.svg" alt="" />
                </a>
              </div>
            </a>
          </div>
          <div className="flex gap-[115px] footer-top">
            <div className="grid grid-cols-1 gap-[10px]">
              <h4 className="ft-top-title">Help</h4>
              <h5>Furniture</h5>
              <h5>Sofa</h5>
              <h5>Other</h5>
              <h5>Tabble</h5>
            </div>
            <div className="grid grid-cols-1 gap-[10px]">
              <h4 className="ft-top-title">Help</h4>
              <h5>Furniture</h5>
              <h5>Sofa</h5>
              <h5>Other</h5>
              <h5>Tabble</h5>
            </div>
            <div className="grid grid-cols-1 gap-[10px]">
              <h4 className="ft-top-title">Help</h4>
              <h5>Furniture</h5>
              <h5>Sofa</h5>
              <h5>Other</h5>
              <h5>Tabble</h5>
            </div>
          </div>
        </div>
        <div className="footer-line w-full h-[1px] bg-[#969696]"></div>
        <div className="footer-bottom mt-[33px] mb-[34px] flex justify-between items-center container">
          <h4 className="ft">© 2021 Funking - All rights reserved.</h4>
          <div className="flex items-center gap-[51px]">
            <h4 className="ft">Privacy</h4>
            <h4 className="ft">Security</h4>
            <h4 className="ft">Terms</h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
