import React, {Component, useEffect} from 'react';
import {Link} from "react-router-dom";
import Auth from "../../Auth";

//ToDo: Add user name
const UserProfile = (props) => {




    return (
        <li className="nav-item dropdown custom-navbar custom-navbar-item">
            <a id="navbarDropdown" className="nav-link dropdown-toggle text-lg-right text-white" href="#"
               role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                {/*{{Auth::user()->name}}*/} <span className="caret"></span>
            </a>

            <div className="dropdown-menu dropdown-menu-right custom-navbar" aria-labelledby="navbarDropdown">
                <Link to='/auth/logout'>
                    <a className="dropdown-item" onClick="event.preventDefault();
                                  document.getElementById('logout-form').submit();">
                        Logout
                    </a>
                </Link>

                {/*<form id="logout-form" action="{{ route('logout') }}" method="POST"
                          style="display: none; color:black">
                        @csrf

                    </form>*/}
            </div>
        </li>
    );

}

export default UserProfile;
