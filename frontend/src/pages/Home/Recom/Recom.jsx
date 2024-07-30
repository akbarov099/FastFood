import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardActionArea } from '@mui/material';
import { BsCartPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Recom() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/products/');
                setItems(response.data);
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section className="recom">
            <div className="container">
                <h2 className="recom_title">Products</h2>
                <ul className="recom_wrapper">
                    {items.map(item => (
                        <li className="recom_item" key={item.id}>
                            <CardActionArea>
                                <Link to={`/product/${item.id}`}>
                                    <img className="item_img" src={item.img} alt={item.name} />
                                </Link>
                                <div className="item_content">
                                    <h3 className="item_title">{item.name}</h3>
                                    <p className="item_suptitle">{item.description}</p>
                                    <div className="item_price_cart">
                                        <p className="item_price">
                                            Price: <span className="num">{item.price}</span>
                                            <span>сом</span>
                                        </p>
                                        <div className="item_cart">
                                            <BsCartPlus />
                                        </div>
                                    </div>
                                </div>
                            </CardActionArea>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
