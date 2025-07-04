import React from "react";

const Collect = () => {
  return (
    <>
      <div className="collect mb-[120px]">
        <div className="container collect-container">
          <div className="parent">
            <div class="div1">
              <div className="collect-content mt-[49px] ml-[31px]">
                <h3 className="collect-title mb-[10px]">
                  Modern Furniture Collections
                </h3>
                <h4 className="collect-price mb-[13px]">Starting from $500</h4>
                <a
                  href="#"
                  className="collect-link flex items-center gap-[3px]"
                >
                  Read more
                  <img src="/images/svg/Vector (1).svg" alt="" />
                </a>
              </div>
            </div>
            <div class="div2">
              <div className="collect-content mt-[52px] ml-[24px]">
                <h3 className="collect-title collect-title-2 mb-[8px]">
                  Geometric Bookcase
                </h3>
                <h4 className="collect-price mb-[9px]">Starting from $500</h4>
                <a
                  href="#"
                  className="collect-link flex items-center gap-[3px]"
                >
                  Read more
                  <img src="/images/svg/Vector (1).svg" alt="" />
                </a>
              </div>
            </div>
            <div class="div3">
              <div className="collect-content mt-[52px] ml-[24px]">
                <h3 className="collect-title collect-title-2 mb-[8px]">
                  Minimal Sofa collections
                </h3>
                <h4 className="collect-price mb-[8px]">Starting from $500</h4>
                <a
                  href="#"
                  className="collect-link flex items-center gap-[3px]"
                >
                  Read more
                  <img src="/images/svg/Vector (1).svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collect;
