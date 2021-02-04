import { Button, TextField } from '@material-ui/core';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Card.css";
function Card({src,title,description,price,fid,qty}) {
    const [id,setId] = useState('');
    const [num,setNum] = useState(1);
    const addToCart = (src,title,description,price,fid,qty) =>{
        const cartData ={
            img_url:src,
            title:title,
            description:description,
            price:price,
            qty:qty
        }
        console.log(cartData);
        axios.post('/api/v1/addCarts' , cartData);
    }

    return (
        <div data-aos="flip-right" className="card">
           <a href=""><img src={src} alt=""/></a>
           <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>Rs.{price?price:'0.00'}</h3>
                <input type="hidden" onChange={(e) => setId(e.target.value) }  value={fid} />
                <Button variant="outlined" onClick={() => addToCart(src,title,description,price,fid,qty)}>Add To Cart</Button>
           </div>
        </div>
    )
}

export default Card
