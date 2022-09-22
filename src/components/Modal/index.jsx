import { useState } from "react";

function ProductItem(props) {
  const { product } = props;
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {product?.name}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img src={product?.image} className="card-img-top" alt="images-product" />
            <p><span>Name: </span>{product?.name}</p>
            <p><span>Description: </span>{product?.description}</p>
            <p><span>Price: </span>{product?.price}</p>
            <p><span>Quantity: </span>{product?.quantity}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
