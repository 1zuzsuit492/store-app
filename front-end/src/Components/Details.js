import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
//useParams is used 

function Details (){
    const URL = process.env.REACT_APP_API_URL;
    const [products, setProducts] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

useEffect(() => {
//make a get request to http://localhost:3001/bookmarks/:id
axios.get(`${URL}/${id}`)
.then((response) => setProducts(response.data));
}, [URL, id]); 

const handleDelete = () => {
axios.delete(`${URL}/${id}`)
.then(() => navigate('/'));
}

return (
    <article className="details">
      <h3>Product Details</h3>
      <p>{products.name}</p>
      <h3>Description</h3> 
      <p>{products.description}</p>
      <h3>Price</h3>
      <p>{products.price}</p>
      <h3>Rating</h3>
      <p>{products.rating}</p>
      <h3>Featured</h3>
      <p>{products.featured}</p>
      <br />
      <div className="btn-group" role="group" aria-label="Basic example">
        <Link to={'/'}>
          <button type="button" className="back-btn">Back</button>
        </Link> {/*redirect user to home pg */}
        <Link to={`/products/${id}/edit`}>
          <button type="button" className="edit-btn">Edit</button>
        </Link>
        <Link to={`/products/${id}/edit`}>
          <button onClick={handleDelete} type="button" className="btn btn-primary">Delete</button>
        </Link>
      </div>
    </article>
  );
}


export default Details;
