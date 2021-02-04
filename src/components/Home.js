import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Cart from './Cart';
import Header from './Header';
import './Home.css';
import Menu from './Menu';

function Home() {
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
