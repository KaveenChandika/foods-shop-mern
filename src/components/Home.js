import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Link,Switch, useHistory} from 'react-router-dom';
import Cart from './Cart';
import Header from './Header';
import './Home.css';
import Logout from './Logout';
import Menu from './Menu';

function Home() {
    const history = useHistory();

    const handleLogout = () =>{
        localStorage.clear();
        history.push('/');
        window.location.reload();
    }

    return (
        <div className="home">
            <Router>
                <Header />    
                <Switch>
                    <Route path="/Home" component={Menu} ></Route>
                    <Route path="/Cart" component={Cart}></Route>
                    <Route path="/" ><Menu/ ></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Home
