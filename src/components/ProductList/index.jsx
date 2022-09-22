import { useState, useEffect } from "react";

import ProductItem from "../ProductItem";
import Modal from "../Modal";

function ProductList(props) {
  const [idProductModal, setIdProductModal] = useState(0);
  const [productSelected, changeProductSelected] = useState({})

  $('#exampleModal').on('hidden.bs.modal', function (e) {
    setIdProductModal(0)
  })

  useEffect(() => {
    if(!idProductModal) return

    const product = props.productsData.find(product => product.id === idProductModal)
    changeProductSelected(product)
    $("#exampleModal").modal();
  }, [idProductModal]);

  const list = props.productsData.map((product) => (
    <ProductItem
      item={product}
      key={product.id}
      setIdProductModal={setIdProductModal}
    />
  ));

  return (
    <div className="container">
      {idProductModal}
      <div className="wrap-cart row">
        <div className="wrap-list-products col-12">
          <div className="row">{list}</div>
        </div>
        <div className="wrap-modal">
          <button onClick={() => showModal()}>zz</button>
          <Modal product={productSelected}/>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
