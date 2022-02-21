import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
const NewProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
    featured: false,
  });

  function handleTextChange(event) {
    if (event.target.id === "is_favorite") {
      setProduct({ ...product, [event.target.id]: !product.is_favorite });
    } else {
      setProduct({ ...product, [event.target.id]: event.target.value });
    }
  }

  const addProduct = (newProduct) => {
    axios
      .post(`${API}/products/new`, newProduct)
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => console.warn(error));
  };

  function handleSubmit(event) {
    event.preventDefault();
    addProduct(product);
  }

  return (
    <div className="NewPage">
      <h1>New Products</h1>
      <form onSubmit={handleSubmit}>
        
        <input type="text" onChange={handleTextChange} id="name"
          value={product.name} placeholder="Name"/>

        <input type="text" onChange={handleTextChange}
        id="description" value={product.description} placeholder="Description"/>

        <input type="text" onChange={handleTextChange}
          id="price" value={product.price} placeholder="Price"/>

        <input type="text" onChange={handleTextChange}
          id="rating" value={product.rating} placeholder="Rating"/>

        <input type="text" onChange={handleTextChange}
          id="featured" value={product.featured} placeholder="Featured"/>

        <input type="checkbox" onChange={handleTextChange} id="is_favorite" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewProducts;