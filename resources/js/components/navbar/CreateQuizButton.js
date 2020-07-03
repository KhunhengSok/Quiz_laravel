import React, {Component, PureComponent} from 'react';
import {Link} from "react-router-dom";

function mapStateToProps(state) {
    return {};
}

class CreateQuizButton extends PureComponent {
    render() {
        return (
           <Link to='/quiz/create' style={{textDecoration: 'none'}}>
               <li id='create_nav' className="nav-item custom-navbar-item nav-link text-white mr-3"aria-labelledby="navbarDropdown">
                   Create Quiz
               </li>
           </Link>
        );
    }
}

export default CreateQuizButton;
