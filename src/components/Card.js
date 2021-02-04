import { Button } from '@material-ui/core';
import axios from './axios';
import React from 'react'
import "./Card.css";
import { Link } from 'react-router-dom';
function Card({src,title,description,price,fid,qty}) {
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
           <Link to="/" ><img src={src} alt=""/></Link>
           <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>Rs.{price?price:'0.00'}</h3>
                <Button variant="outlined" onClick={() => addToCart(src,title,description,price,fid,qty)}>Add To Cart</Button>
           </div>
        </div>
    )
}

export default Card
