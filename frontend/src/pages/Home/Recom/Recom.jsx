import React, { useState } from 'react';
import { CardActionArea } from '@mui/material';
import { BsCartPlus, BsCartDash } from "react-icons/bs";
import Item from '../../../Components/Item/Item';


export default function Recom() {
    const data = [
        {
            id: 1,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZrYaAUFja9oCPgsqXQMWRXQzVKm0zeq_Tal1cfOxp2CGgArh9MRXmjp-XSweulDFz4c&usqp=CAU",
            title: "Hamburger",
            suptitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.",
            price: 150,
        },
        {
            id: 2,
            foto: "https://myastoriya.com.ua/upload/medialibrary/6f4/qo0by2qp5ceiic0upzyy36y07ikrglja.jpg",
            title: "Shawarma",
            suptitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.",
            price: 220,
        },
        {
            id: 3,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeMnN6hvRhQz0B_n6wQARXBpUf9lIlE3Vjg&s",
            title: "Pizza",
            suptitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.",
            price: 550,
        },
        {
            id: 4,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOwwr1Ec5gcDAheZkEp90Au8wQoSQCw98Zg&s",
            title: "Nuggets",
            suptitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.",
            price: 340,
        },
        {
            id: 5,
            foto: "https://media.express24.uz/r/848/1500/upload/iblock/ae8/ae8017dc3ec0f86462f13c069acee026.png",
            title: "Hot Dog",
            suptitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.",
            price: 110,
        },
        {
            id: 6,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8q4JsFxtjdezijokQQLbtPluQf8ugh7uFA&s",
            title: "Sandwiches",
            suptitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, molestias.",
            price: 130,
        },
    ]
    const [product, setProduct] = useState(data)
    return (
        <section className='recom'>
            <div className="container">
                <h2 className='recom_title'>Products</h2>

                <ul className='recom_wrapper'>
                    {product.map(item => (
                        <Item key={item.id} item={item} />
                    ))}
                </ul>

            </div>
        </section>
    )
}
