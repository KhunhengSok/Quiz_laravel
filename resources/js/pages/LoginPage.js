import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';

import Navbar from "../components/navbar/Navbar";

class LoginPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state  = {
            isRedirect : false,
            redirect: props.location
        }
    }


    render() {
        if (this.state.isRedirect) {
            return <Redirect to={this.props.redirect}/>
        } else {
            return (
                <div>
                    <Navbar/>

                    <div className='container my-4'>
                        <h1>Login Page</h1>
                    </div>

                </div>
            )
        }

    }
}


export default LoginPage;
