import React, {Component} from 'react';
import HomeButton from "./HomeButton";
import AuthenticateButtons from "./AuthenticateButtons";

// ToDo: Add Authentication
class Navbar extends Component {
    //Logining in

    //loading userr
    render() {
        return (
            <nav className="navbar navbar-expand-lg shadow-sm primary-color custom-navbar">
                <HomeButton/>

                <AuthenticateButtons />
            </nav>
        );
    }
}

export default Navbar;

