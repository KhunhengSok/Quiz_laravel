import React, {PureComponent, useEffect, useState} from 'react';
import Navbar from "../components/navbar/Navbar";
import Button from "../components/shared/Button";
import Auth from "../Auth";
import {Redirect, Link} from 'react-router-dom';
import PageNotFound from "./NotFoundPage";

const UserProfilePage = () => {
    const [isLoggedIn, setLoggedIn] = useState(Auth.isAuthenticated())
    const [isRedirect, setRedirect] = useState(false)

    useEffect(() => {
        setLoggedIn(Auth.isAuthenticated())
    }, [])

    const handleLogOut = () => {
        Auth.logout();
        setRedirect(true);
    }

    if(isRedirect){
        return <Redirect to='/' />
    }

    if (isLoggedIn == true) {
        return (
            <div>
                <Navbar/>
                <div className={'container'}>
                    <h1>Profile Page</h1>
                    <Button onClick={handleLogOut} text={'Log out'}/>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <PageNotFound/>
            </div>
        )
    }

}

UserProfilePage.propTypes = {};

export default UserProfilePage;
