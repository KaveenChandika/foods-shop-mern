import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Menu.css';
import axios from './axios';
function Menu() {
    const [foods,setFoods] =useState([]);
    useEffect(() =>{
        const getFoods = async () =>{
            axios.get('/api/v1/getFoods')
                .then((res) =>{
                    setFoods(res.data);
                })
        }
        getFoods();
    })
    
    return (
        <div className="menu">
            <div className="menu__body">
                {
                    foods.map(food => (
                        <Card 
                            src={food.img_url}
                            title={food.title}
                            description={food.description}
                            price={food.price}
                            qty={1}
                            fid={food._id}
                        />     
                    ))
                }
                 
                
            </div>            
        </div>
    )
}

export default Menu
