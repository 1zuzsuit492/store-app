import { Link } from "react-router-dom";

function Product({ product, id }) {
  return (
    <div className="Product">
      <div className="product"></div>
      <div>{product.name}</div>
      <p>${product.price.toFixed(2)}</p>
      <p>
        <Link to={`/products/${id}`}>More Details</Link>
      </p>
    </div>
  );
}

export default Product;

