import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import axios from './axios';
import './LoginView.css';
import { useHistory } from 'react-router';
function LoginView() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const history = useHistory();

    const userLogin = (e) =>{
        e.preventDefault();
        const data ={
            email:username,
            password:password
        }
        axios.post('/api/v1/auth',data)
            .then((res) =>{
                console.log(res);
                if(res.data.user){

                    localStorage.setItem('token',res.data.token);
                    localStorage.setItem('u_id',res.data.user.id);
                    localStorage.setItem('name',res.data.user.name);
                    localStorage.setItem('email',res.data.user.email);
                    localStorage.setItem('loggedIn',true);
                }
                history.push('/Home');
                window.location.reload();

            })

        
    }
    return (
        <div className="login">
            <div className="login__inputs">
                <h2>LogIn</h2>
                <TextField
                    variant="outlined"
                    id="standard-helperText"
                    size="small"
                    label="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <TextField
                    type="password"
                    variant="outlined"
                    id="standard-helperText"
                    size="small"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <Button variant="contained"  color="primary" onClick={userLogin} >Login</Button>
            </div>
        </div>
    )
}

export default LoginView
