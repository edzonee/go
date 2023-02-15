import Accordion from "./Accordion/Accordion";
import Button from "./Button/Button";
import "./Card.css";
import ProductInfo from "./ProductInfo/ProductInfo";
import { useState } from "react";

const Card = (props) => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div className="card">
      <img className="product-image" src={props.productImg}></img>
      <h1>{props.productTitle}</h1>
      <p className="product-info">{props.productInfo}</p>
      <h4 onClick={() => setOpenInfo((prev) => !prev)}>More info</h4>
      {openInfo && <ProductInfo />}
      <h4 className={props.productClass}>
        {props.productNewPrice}:- 
        <span className="discount"> {props.productOriginalPrice}</span>
      </h4>
      <Button class="add-item" onClick={() => props.setWishlistItem(props.productTitle, props.productNewPrice)}>Add to cart</Button>
    </div>
  );
};

export default Card;
