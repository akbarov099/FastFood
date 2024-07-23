import React, { useState } from 'react';
import { CardActionArea } from '@mui/material';
import { BsPlus } from "react-icons/bs";
import { LiaMinusSolid } from "react-icons/lia";
import { BsCartPlus, BsCartDash } from "react-icons/bs";

export default function CartItem({ item }) {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const handleChange = (event) => {
        setCount(Number(event.target.value));
    };

    return (
        <li className='cart_item'>
            <img className='item_img' src={item.foto} alt={item.title} />

            <div className="item_content">
                <h2 className='item_title'>{item.title}</h2>
                <p className='item_suptitle'>{item.suptitle}</p>
                <p className='item_price'>Price: <span className='num'>{item.price}</span><span>сом</span></p>

                <div className="item_count_buy">
                    <div className="item_count">
                        <CardActionArea onClick={decrement} className='item_count_minus'><LiaMinusSolid /></CardActionArea>
                        <input type="text" value={count} onChange={handleChange} />
                        <CardActionArea onClick={increment} className='item_count_plus'><BsPlus /></CardActionArea>
                    </div>
                    <CardActionArea className='item_buy'>Order</CardActionArea>
                </div>
            </div>

            <CardActionArea className='item_canсel'><BsCartDash /></CardActionArea>

        </li>
    )
}
