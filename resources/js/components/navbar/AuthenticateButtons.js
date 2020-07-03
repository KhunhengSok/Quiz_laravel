import React, {Component} from 'react';
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import CreateQuizButton from "./CreateQuizButton";

function mapStateToProps(state) {
    return {};
}

class AuthenticateButtons extends Component {
    render() {
        return (
            <ul className='navbar-nav ml-auto custom-navbar-item mr-4 '>
                <CreateQuizButton />
                <LoginButton/>
                <SignUpButton/>
            </ul>
        );
    }
}

export  default  AuthenticateButtons;
