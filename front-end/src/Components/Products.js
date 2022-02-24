import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Components/Product";

function Products() {
  const API = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${API}/products`).then((response) => setProducts(response.data));
  }, [API]);

  return (
    <div className="products">
      <br />
      <br />
      <br />
      <br />
      {products.map((product, i) => {
        return <Product key={i} product={product} id={product.id} />;
      })}
      <br />
      <br />
    </div>
  );
}

export default Products;

