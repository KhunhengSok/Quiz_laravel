import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Navbar from "../components/navbar/Navbar";

class SignUpPage extends PureComponent {
    render() {
        return (
            <div>
                <Navbar />
                <div className='container my-4'>
                    <h1>Sign Up</h1>
                </div>
            </div>
        );
    }
}

export default SignUpPage;
