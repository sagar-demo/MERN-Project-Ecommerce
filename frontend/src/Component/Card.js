import React, { useState } from "react";

const Card = ({ data }) => {
  const [image, setImage] = useState(data.images[0]);
  console.log(data);
  return (
    <div>
      <div className="productDetails">
        <div className="imageCotaier">
          <img src={image} alt="" />
        </div>
        <div className="description">
          <div className="multiple-image">
            {data.images.map((props) => {
              return <img src={props} alt="" />;
            })}
          </div>
          <div className="title">{data.title}</div>
          <div className="brandandCategory">
            <span>{data.brand}</span>
            <span>{data.category}</span>
            <span>{data.rating}</span>
          </div>
          <div className="pricecontainer">
            <span className="price">
              <span>Price</span>
              {data.price}
            </span>
            <span className="discount">
              <span>Discount</span> {data.discountPercentage}%
            </span>
          </div>
          <button className="cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
