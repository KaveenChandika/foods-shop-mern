import React, { useEffect, useState } from 'react'
import './Cart.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';
import axios from './axios';
import { Button } from '@material-ui/core';
function Cart() {
    var total = 0;
    var dec_val = 0;
    var inc_val = 0;
    const [carts,setCart] =useState([]);
    const [subTotal, setSubTotal] = useState(0);
    useEffect(() =>{
        const orderDetails = async () =>{
            axios.get('/api/v1/getCarts')
                .then((res) =>{
                    setCart(res.data);
                    console.log(res.data);
                })
        }

        // get total of orders 
        const getTotal = () =>{
            {carts.map(cart2=>{
                total  += ((cart2.qty) * (cart2.price)) 
                setSubTotal(total);
            })}
        }

        orderDetails();
        getTotal();
    },[carts])

    

    // delete specific order
    const delCart = async (id) =>{
        await axios.delete(`/api/v1/delCart/${id}`)
    }

    const decrement = (qty_dec,id) =>{
        if(qty_dec > 1){
            dec_val = qty_dec - 1;
        }else{
            dec_val = qty_dec;
        }
        axios.post('/api/v1/updateCart' , {qty:dec_val, _id:id})
    }

    const increment = (qty_inc,id) =>{
        inc_val = qty_inc + 1;
        axios.post('/api/v1/updateCart' , {qty:inc_val, _id:id})
    }


    if(carts.length != 0){
    return (
        <div className="cart">
            <div className="cart__info">
                
                <div className="cart__table">
                <h2>Foods Cart</h2>
                    <TableContainer component={Paper}>
                        <Table className="table"  aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="left"><b>Foods Name</b></TableCell>
                                <TableCell align="left"><b>Qty</b></TableCell>
                                <TableCell align="left"><b>Price</b></TableCell>
                                <TableCell align="left"><b>Amount</b></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                               
                                {carts.map(cart =>(
                                    <TableRow>
                                        <TableCell align="left"><img src={cart.img_url}  width="50px" height="50px" alt=""/></TableCell>
                                        <TableCell align="left">{cart.title}</TableCell>
                                        <TableCell align="left">{cart.qty}</TableCell>
                                        <TableCell align="left">{(cart.price).toFixed(2)}</TableCell>
                                        <TableCell align="left">{(cart.qty * cart.price).toFixed(2)}</TableCell>
                                        <TableCell>
                                                <input type="button" value="-" onClick={() => decrement(cart.qty,cart._id)} /> 
                                                <input type="button" value="+" onClick={() => increment(cart.qty,cart._id)} />
                                        </TableCell>
                                        <TableCell><label className="cart__table_label" onClick={() => delCart(cart._id)} >X</label></TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell align=""></TableCell>
                                    <TableCell align=""></TableCell>
                                    <TableCell align=""></TableCell>
                                    <TableCell align="left"><h4>Sub Total</h4></TableCell>
                                    <TableCell align="left"><h4><b>{subTotal.toFixed(2)}</b></h4></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>              
            </div>
        </div>
    )
    }else{
       return(
        <div className="cart_no">
            <div className="cart__info_no">
                <h3>There is no placed orders, please go menu and place the order   </h3> <SentimentVeryDissatisfied />
            </div>
        </div>
       ) 
    }
}

export default Cart
