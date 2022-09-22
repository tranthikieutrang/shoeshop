import { useState } from "react";
import "./style.scss";

function ProductItem(props) {
  console.log(props.item);
  const { name, image, price, id } = props.item;
  const { setIdProductModal } = props;
  const handleClickItem = (e) => {
    e.preventDefault();
    
    setIdProductModal(id);
  };
  return (
    <div
      className="product-item col-4 mb-5"
      onClick={(e) => handleClickItem(e)}
    >
      <div className="card p-1">
        <img src={image} className="card-img-top" alt="images-product" />
        <div className="card-body pt-0 text-left">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price} $</p>
          <a
            href="#"
            className="btn btn-primary"
            onClick={(e) => handleClickItem(e)}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
