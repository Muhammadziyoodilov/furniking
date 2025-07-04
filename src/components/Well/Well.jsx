import React from "react";

const Well = () => {
  return (
    <>
      <div className="well py-[16px]">
        <div className="container flex items-center justify-between">
          <h4 className="well-title">Welcome to our online shop</h4>
          <div className="well-right flex items-center gap-[20px]">
            <h4 className="lang">English (USD)</h4>
            <div className="well-line bg-[#ffffff] w-[2px] h-[19px]"></div>
            <h4 className="lang">Login or Sign up</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Well;
