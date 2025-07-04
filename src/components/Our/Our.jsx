import React from "react";

const Our = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center mb-[56px]">Our Latest Articles</h2>
        <div className="grid grid-cols-2 gap-[26px] place-items-center">
          <img className="our-image" src="/images/png/our1.png" alt="" />
          <img className="our-image" src="/images/png/our2.png" alt="" />
          <img className="our-image" src="/images/png/our3.png" alt="" />
          <img className="our-image" src="/images/png/our4.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Our;
