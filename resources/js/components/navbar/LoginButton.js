import React, {Component, PureComponent} from 'react';
import {Link} from "react-router-dom";

class LoginButton extends PureComponent {
    render() {
        return (
            <Link to='/login' style={{textDecoration: 'none'}}>
                <li className="nav-item nav-link text-white">
                    Log In
                </li>
            </Link>
        );
    }
}

export default LoginButton;
