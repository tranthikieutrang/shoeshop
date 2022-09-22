import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import data from './data/products.json'

import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="wrap-cart">
      <h3 className="wrap-cart__title mb-5">Shoes Shop</h3>
      <ProductList productsData={data}/>
    </div>
  );
}

export default App;
