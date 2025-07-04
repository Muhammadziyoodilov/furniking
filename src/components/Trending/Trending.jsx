import React, { useState } from "react";
import TopProducts from "../products/TopProducts";
import NewArrival from "../products/NewArrival";
import BestSellers from "../products/BestSellers";
const tabs = ["Top Products", "New Arrivals", "Best Sellers"];
const Trending = () => {
  const [activeTab, setActiveTab] = useState("Top Products");
  return (
    <>
      <div className="trending mb-[130px]">
        <div className="container trending-container">
          <h2 className="text-center mb-[45px]">TRENDING</h2>
          <div className="flex gap-[70px] mx-[auto] justify-center items-center mb-[73px]">
            {tabs.map((tab) => {
              return (
                <button
                  className={
                    tab == activeTab ? "trending-btn active" : "trending-btn"
                  }
                  onClick={() => {
                    setActiveTab(tab);
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
        {activeTab == "Top Products" && <TopProducts />}
        {activeTab === "New Arrivals" && <NewArrival />}
        {activeTab === "Best Sellers" && <BestSellers />}
      </div>
    </>
  );
};

export default Trending;
