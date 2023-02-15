import Card from "./Components/Card";
import "./App.css";
import Wishlist from "./Components/Wishlist/Wishlist";
import { useState, useEffect } from "react";

const App = () => {

 const [wishlistItem, setWishlistItem] = useState([])

 const updateWishlist = (title, price) => {
  setWishlistItem((prev) => [...prev, {'productTitle' : title, 'productNewPrice' : +price}])
 }
 useEffect(()=>{
  console.log(wishlistItem)

}, [wishlistItem])

  return (
    <>
      <h1>Super product list</h1>

      <div className="container">
        <Card
          productImg="https://media.4rgos.it/s/Argos/9520103_R_SET?$Main768$&w=620&h=620"
          productTitle="iPhone 13"
          productInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga at ut, cumque laboriosam labore rem libero nostrum reprehenderit commodi harum similique vel a ad, aliquam ipsam reiciendis!"
          productClass="red"
          productNewPrice="5000"
          productOriginalPrice="7999"
          setWishlistItem={updateWishlist}
        ></Card>

        <Card
          productImg="https://snapcraze.co.za/wp-content/uploads/2021/11/macbook-pro-14-sg-2.jpeg"
          productTitle="MacBook Pro"
          productInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga at ut, cumque laboriosam labore rem libero nostrum reprehenderit commodi harum similique vel a ad, aliquam ipsam reiciendis!"
          productClass="red"
          productNewPrice="9990"
          productOriginalPrice="1279"
          setWishlistItem={updateWishlist}
        ></Card>

        <Card
          productImg="https://cdn.refurb.eu//files/refurb.eu/BareboneProductFile/239-apple-ipad-pro-105.jpg"
          productTitle="Used iPad"
          productInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga at ut, cumque laboriosam labore rem libero nostrum reprehenderit commodi harum similique vel a ad, aliquam ipsam reiciendis!"
          productClass="red"
          productNewPrice="1999"
          productOriginalPrice="2500"
          setWishlistItem={updateWishlist}
        ></Card>

        <Card
          productImg="https://www.elgiganten.se/image/dv_web_D180001002173992/APPAIRPODS/apple-airpods-helt-tradlosa-horlurar-gen-1--pdp_zoom-3000--pdp_main-540.jpg"
          productTitle="AirPods"
          productInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga at ut, cumque laboriosam labore rem libero nostrum reprehenderit commodi harum similique vel a ad, aliquam ipsam reiciendis!"
          productNewPrice="699"
          setWishlistItem={updateWishlist}
        ></Card>

        <Card
          productImg="https://pricespy-75b8.kxcdn.com/product/standard/280/5670733.jpg"
          productTitle="Apple Headphones"
          productInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga at ut, cumque laboriosam labore rem libero nostrum reprehenderit commodi harum similique vel a ad, aliquam ipsam reiciendis!"
          productNewPrice="2229"
          setWishlistItem={updateWishlist}
        ></Card>

        <Card
          productImg="https://files.refurbed.com/pi/apple-imac-2013-i5-21-5-1595495525.jpg?t=resize&h=630&w=1200"
          productTitle="iMac"
          productInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga at ut, cumque laboriosam labore rem libero nostrum reprehenderit commodi harum similique vel a ad, aliquam ipsam reiciendis!"
          productNewPrice="25000"
          setWishlistItem={updateWishlist}
        ></Card>
      </div>
      <Wishlist wishlistItem={wishlistItem} />
    </>
  );
};
export default App;
