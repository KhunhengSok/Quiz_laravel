import React from "react";
import {Link} from 'react-router-dom'
import CreateQuizButton from "./CreateQuizButton";

const UserProfileButton = (props) => {

    return (
        <div className={'navbar-nav ml-auto custom-navbar-item mr-4 '}>
            <CreateQuizButton />

            <Link to='/profile'  style={{textDecoration: 'none'}}>
                <li className={"nav-item custom-navbar-item nav-link text-white mr-3"} >
                    {props.text}
                </li>
            </Link>
        </div>

    )
}

export default UserProfileButton;

