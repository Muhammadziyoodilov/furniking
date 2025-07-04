import React from "react";
import { productsData } from "./data/products";
const NewArrival = () => {
  const filtered = productsData.filter((p) => p.category == "new");
  console.log(filtered);
  return (
    <>
      <div className="container grid grid-cols-4 gap-[70px]">
        {filtered.map((product) => {
          return (
            <div className="product">
              <div
                className={
                  product.badge == "sale" ? "catigory sale" : "catigory"
                }
              >
                <h4 className="catigory-title">{product.badge}</h4>
              </div>
              <img
                src="/images/png/Container.png"
                alt=""
                className="product-img mb-[15px]"
              />
              <h4 className="product-glob mb-[9px]">Chair</h4>
              <h3 className="product-name mb-[8px]">{product.name}</h3>
              <div className="product-bottom flex justify-between items-center">
                <div className="flex items-center gap-[7px]">
                  <h3 className="product-price">${product.price}</h3>
                  <h3 className="product-old-price">${product.oldPrice}</h3>
                </div>
                <div className="flex gap-[4px]">
                  <img
                    src="/images/svg/star.svg"
                    alt=""
                    className="product-star"
                  />
                  <img
                    src="/images/svg/star.svg"
                    alt=""
                    className="product-star"
                  />
                  <img
                    src="/images/svg/star.svg"
                    alt=""
                    className="product-star"
                  />
                  <img
                    src="/images/svg/star.svg"
                    alt=""
                    className="product-star"
                  />
                  <img
                    src="/images/svg/star.svg"
                    alt=""
                    className="product-star"
                  />
                  <img
                    src="/images/svg/star.svg"
                    alt=""
                    className="product-star"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewArrival;
