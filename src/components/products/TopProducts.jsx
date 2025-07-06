import React, { useState } from "react";
import { productsData } from "./data/products";
const TopProducts = () => {
  const [likedItems, setLikedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const toggleCart = (id) => {
    if (cartItems.includes(id)) {
      setCartItems(cartItems.filter((itemId) => itemId !== id));
    } else {
      setCartItems([...cartItems, id]);
    }
  };
  const toggleLike = (id) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter((itemId) => itemId !== id));
    } else {
      setLikedItems([...likedItems, id]);
    }
  };
  return (
    <>
      <div className="container grid grid-cols-4 gap-[70px]">
        {productsData.map((product) => {
          return (
            <div className="product">
              <div
                className={
                  product.badge == "sale" ? "catigory sale" : "catigory"
                }
              >
                <h4 className="catigory-title">{product.badge}</h4>
              </div>
              <div className="hover-wrp">
                <img
                  src={
                    likedItems.includes(product.id)
                      ? "images/svg/Liked.svg"
                      : "images/svg/Favourite.svg"
                  }
                  alt=""
                  onClick={() => {
                    toggleLike(product.id);
                  }}
                />

                <img
                  src={
                    cartItems.includes(product.id)
                      ? "images/svg/added.svg"
                      : "images/svg/Shop.svg"
                  }
                  alt=""
                  onClick={() => {
                    toggleCart(product.id);
                  }}
                />

                <img src="images/svg/Compare.svg" alt="" />

                <img src="images/svg/View.svg" alt="" />
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

export default TopProducts;
