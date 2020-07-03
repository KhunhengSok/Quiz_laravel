import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Navbar from "../components/navbar/Navbar";

class ProfilePage extends PureComponent {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Profile Page</h1>
            </div>
        );
    }
}

ProfilePage.propTypes = {};

export default ProfilePage;
