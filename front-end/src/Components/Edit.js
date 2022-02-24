import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const URL = process.env.REACT_APP_API_URL;
    const { index } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        rating: "",
        featured: false,
    });

    const handleTextChange = (event) => {
        setProduct({ ...product, [event.target.id]: event.target.value });
    };

useEffect(() => {
    axios.get(`${URL}/${index}`)
    .then((response) => {
    console.log(response.data)
    setProduct(response.data);
    })
}, [URL, index]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/${index}`, product)
            .then(() => {
                navigate("/");
            }).catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="editItem">
                <div className="description">
                    <label htmlFor="description">Description</label>
                    <br />
                    <input id="description" value={product.description} name="description" 
                    type="text" placeholder="description" onChange={handleTextChange} />
                </div>

                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input id="name" value={product.name} name="name" type="text" 
                    placeholder="name" onChange={handleTextChange} />
                </div>

                <br />

                <div className="price">
                    <label htmlFor="price">price</label>
                    <input type='number' id="price" name="price" value={product.price} type="text"
                    placeholder="price" onChange={handleTextChange} />
                </div>

                <br />

                <div className="rating">
                    <label htmlFor="rating">Rating</label>
                    <input type='number' id="rating" name="rating" value={product.rating} type="text"
                    placeholder="rating" onChange={handleTextChange} />
                </div>

                <input type="submit" value="EDIT" />

            </form>
        </div>
    )
}


export default Edit;
