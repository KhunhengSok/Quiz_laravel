import React, {Component, PureComponent} from 'react';
import {Link} from "react-router-dom";

class SignUpButton extends PureComponent {
    render() {
        return (
            <Link to='/signup' style={{textDecoration: 'none'}}>
                <li className="nav-item nav-link text-white">
                    Register
                </li>
            </Link>
        );
    }
}

export default SignUpButton;
