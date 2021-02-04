import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import './Header.css';
import axios from './axios';
function Header() {
    const history = useHistory();
    const [cartCount,setCartCount] = useState(0);
    const [carts,setCart] = useState([]);
    useEffect(() =>{
        const orderDetails = async () =>{
            axios.get('/api/v1/getCarts')
                .then((res) =>{
                    setCart(res.data);
                    setCartCount(res.data.length);
                })
        }

        orderDetails();
    },[carts]);

    
    const handleLogout = () =>{
        localStorage.clear();
        history.push('/');
        window.location.reload();
    }

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <h1>Foods Order</h1>
                </div>
            </div>
            <div className="header__right">
                <div className="header__routes">
                    <Link to="/Home">Menu</Link>
                    <Link to="/Cart" >
                        <Badge  badgeContent={cartCount} color="secondary">
                            <ShoppingCartOutlinedIcon/>
                        </Badge >
                    </Link>
                    <Link onClick={handleLogout}>Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
