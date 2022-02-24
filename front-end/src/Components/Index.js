import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
    const API = process.env.REACT_APP_API_URL;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/products`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.warn(error));
    }, [API]);

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                    <th>Featured</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Rating</th>
                    </tr>
                </tbody>
                {product.map((item) => {
                    return (
                        <tr>
                            <td>{item.featured ? "⭐️" : ""}</td>
                            <td>
                                <Link to={`/${item.id}`}>{item.name}</Link>
                            </td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default Index;