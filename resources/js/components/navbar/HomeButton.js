import React, {Component} from 'react';
import {Link} from "react-router-dom";

class HomeButton extends Component {
    render() {
        return (
            <Link to='/'>
                <div className="ml-4">
                    <li className="navbar-brand mr-auto text-white font-weight-bold text-lg-left custom-navbar-title"
                    >Quiz
                    </li>
                </div>

            </Link>
        );
    }
}

export default HomeButton;
