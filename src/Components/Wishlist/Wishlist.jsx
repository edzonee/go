import "./Wishlist.css";
import { useState, useEffect } from "react";

const Wishlist = ({ wishlistItem, setWishlistItem }) => {
  useEffect(() => {
    console.log(wishlistItem)
  }, [wishlistItem]);

  return (
    <div className="center">
      <h1>Wishlist</h1>
      {wishlistItem.map((products) => {
        return <h4 key={Math.random()}>{`Product: ${products.productTitle}, Price: ${products.productNewPrice} :-`}</h4>;
      })}
      <h2>Total price: {wishlistItem.length > 0 ? wishlistItem.map(products => +products.productNewPrice).reduce((a, b)=>a+b) : null}</h2>
    </div>
  );
};

export default Wishlist;
