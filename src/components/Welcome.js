import { Button } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom';
function Welcome() {
    return (
        <div className="welcome">
            <Link to="/Login" ><Button>Login</Button></Link>
        </div>
    )
}

export default Welcome
