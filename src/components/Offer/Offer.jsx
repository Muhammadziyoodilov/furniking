import React from "react";

const Offer = () => {
  return (
    <>
      <div className="offer mb-[120px]">
        <div className="container offer-container">
          <h2 className="text-center mb-[60px]">SPECIAL OFFER</h2>
          <div className="offer-cards-wrp flex justify-between items-center">
            <div className="offer-card">
              <div className="card-content">
                <h3 className="offer-title mb-[11px]">Living Room Furniture</h3>
                <p className="offer-info mb-[20px]">
                  You don't have a chair. Are you ready for growth? Shop with us
                  40% discount!
                </p>
                <div className="offer-price-wrp mb-[29px] flex items-center gap-[7px]">
                  <h3 className="offer-price">$150</h3>
                  <h3 className="offer-old-price">$250</h3>
                  <button className="offer-btn ml-[19px]">SHOP NOW</button>
                </div>
                <div className="time-wrp flex items-center gap-[18px]">
                  <div className="time-content">
                    <h4 className="time">10</h4>
                    <h5 className="time-info">Days</h5>
                  </div>
                  <div className="time-content">
                    <h4 className="time">15</h4>
                    <h5 className="time-info">HRS</h5>
                  </div>
                  <div className="time-content">
                    <h4 className="time">30</h4>
                    <h5 className="time-info">MIN</h5>
                  </div>
                  <div className="time-content">
                    <h4 className="time">22</h4>
                    <h5 className="time-info">secs</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="offer-card">
              <div className="card-content">
                <h3 className="offer-title mb-[11px]">Modern chair</h3>
                <p className="offer-info mb-[20px]">
                  Hot chairs of the modern era are now available in our stock.
                </p>
                <div className="offer-price-wrp mb-[29px] flex items-center gap-[7px]">
                  <h3 className="offer-price">$75</h3>
                  <h3 className="offer-old-price">$150</h3>
                  <button className="offer-btn ml-[19px]">SHOP NOW</button>
                </div>
                <div className="time-wrp flex items-center gap-[18px]">
                  <div className="time-content">
                    <h4 className="time">15</h4>
                    <h5 className="time-info">Days</h5>
                  </div>
                  <div className="time-content">
                    <h4 className="time">08</h4>
                    <h5 className="time-info">HRS</h5>
                  </div>
                  <div className="time-content">
                    <h4 className="time">20</h4>
                    <h5 className="time-info">MIN</h5>
                  </div>
                  <div className="time-content">
                    <h4 className="time">12</h4>
                    <h5 className="time-info">secs</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
