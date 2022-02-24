import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
const New = () => {
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

  const handleTextChange = (event) => {
    setProduct({...product, [event.target.id]: event.target.value})
  } 

  const addProduct = (newProduct) => {
    axios.post(`${API}/products`, newProduct)
      .then(() => {
        navigate("/products");
      })
      .catch((error) => console.warn(error));
  }; //removed /new

  function handleSubmit(event) {
    event.preventDefault();
    axios.post(`${API}/products`, product)
    .then(() => navigate('/'))
    addProduct(product);
  }

  return (
    <form  onSubmit={handleSubmit} className="newItem">
      <div>
      <h2>Add a new item</h2>
      </div>
    
      <div className="description">
      <label htmlFor="description">Description</label>
      <input id="description" value={product.description} name="date" 
      type="text" placeholder="date" onChange={handleTextChange}/>
      </div>
    
      <br />
      <div className="name">
      <label htmlFor="name">Name</label>
      <input id="name" value={product.rating} name="name" 
      type="text" placeholder="name" onChange={handleTextChange}/>
      </div>
    
      <br />
      <div className="price">
      <label htmlFor="price">price</label>
      <input 
      id="price" value={product.price} name="price" 
      type="number" placeholder="price" onChange={handleTextChange}/>
      </div>
    
      <br />
      <div className="rating">
      <label htmlFor="rating">rating</label>
      <input id="rating" name="rating" value={product.rating}
      type="text" placeholder="rating" onChange={handleTextChange}/>
      </div>
    
      <br />
      
      <button type="submit">CREATE NEW ITEM</button>
    
    </form>
    )
      }
    
    
    export default New;