import React, {Component, useEffect, useState} from 'react';
import HomeButton from "./HomeButton";
import AuthenticateButtons from "./AuthenticateButtons";
import Auth from "../../Auth";
import UserProfileButton from "./UserProfileButton";

// ToDo: Add Authentication
const Navbar = (props) => {
    /*let credential = {
        email: 'khunhengs32@gmail.com',
        password: 'abcde12345',
        password_confirmation: 'abcde12345',
        name: 'khunheng'
    }

    Auth.login(credential).then(result =>{
        console.log(result)
    })*/

    const [loggedIn, setloggedIn] = useState(Auth.isAuthenticated())
    const [user, setUser] = useState({name: ''})

    useEffect( ()=>{
        setloggedIn(Auth.isAuthenticated())
        if(loggedIn == true){
            let u = Auth.me() ? Auth.me() : {name: ''}
            setUser(u)
        }

    }, [])

    /*useEffect(() => {
        const [loggedIn, setloggedIn] = useState(false)
        const [user, setUser] = useState({name: ''})

        let u = Auth.me() ? Auth.me() : {name: ''}
        setloggedIn(Auth.isAuthenticated())
        setUser(u)
    }, []) */

    if (loggedIn != true) {
        return (
            <nav className="navbar navbar-expand-lg shadow-sm primary-color custom-navbar">
                <HomeButton/>
                <AuthenticateButtons />
            </nav>

        );
    } else {
        return (
            <nav className="navbar navbar-expand-lg shadow-sm primary-color custom-navbar">
                <HomeButton/>
                <UserProfileButton text={user.name}/>
            </nav>
        )
    }



}

export default Navbar;

