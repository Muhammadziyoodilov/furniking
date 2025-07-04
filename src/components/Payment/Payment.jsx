import React from "react";

const Payment = () => {
  return (
    <>
      <div className="payment pb-[70px]">
        <div className="container payment-container flex justify-between items-center">
          <div className="payment-card flex items-center gap-[15px]">
            <img
              src="/images/svg/payment-icons/free-delivery 1.svg"
              alt=""
              className="payment-img"
              width={58}
              height={58}
            />
            <div className="payment-left">
              <h4 className="payment-title">Free Shipping</h4>
              <h5 className="payment-info">Smart Gift Card</h5>
            </div>
          </div>
          <div className="payment-card flex items-center gap-[15px]">
            <img
              src="/images/svg/payment-icons/Page-1.svg"
              alt=""
              className="payment-img"
              width={58}
              height={58}
            />
            <div className="payment-left">
              <h4 className="payment-title">Quick Payment</h4>
              <h5 className="payment-info">24/7 Support</h5>
            </div>
          </div>
          <div className="payment-card flex items-center gap-[15px]">
            <img
              src="/images/svg/payment-icons/support 1.svg"
              alt=""
              className="payment-img"
              width={58}
              height={58}
            />
            <div className="payment-left">
              <h4 className="payment-title">Orders over $100</h4>
              <h5 className="payment-info">Buy $1000 to get card</h5>
            </div>
          </div>
          <div className="payment-card flex items-center gap-[15px]">
            <img
              src="/images/svg/payment-icons/wallet 1.svg"
              alt=""
              className="payment-img"
              width={58}
              height={58}
            />
            <div className="payment-left">
              <h4 className="payment-title">100% secure payment</h4>
              <h5 className="payment-info">Quick support</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
