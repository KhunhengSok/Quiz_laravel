import React, {PureComponent, useEffect, useState} from 'react';
import Navbar from "../components/navbar/Navbar";
import BigButton from "../components/shared/BigButton";
import Auth from "../Auth";
import Button from "../components/shared/Button";

const HomePage = (props) => {
    const [loggedIn, setLoggedIn] = useState(Auth.isAuthenticated())
    useEffect(() => {
        setLoggedIn(Auth.isAuthenticated())

    })

    const handleLogOut = (e) => {
        Auth.logout();
        // setRedirect(true);
        setLoggedIn(false)
    }

    const ele = []
    ele.push(<BigButton text={'Create Quiz'} link={'/quiz/create'}/>)
    if (loggedIn) {
        ele.push(<BigButton link={'/'} onClick={handleLogOut} text={'Log out'}/>)
    } else {
        ele.push(<BigButton text={'Login'} link={'/login'}/>)
        ele.push(<BigButton text={'Register'} link={'/signup'} />)
    }

    return (
        <div>
            <Navbar/>
            {/*<div className='container my-4 page-center'
                 style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <BigButton text={'Create Quiz'} link={'/quiz/create'}></BigButton>
            </div>*/}
            <div className={'container my-4 page-center'} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                {ele}
            </div>
        </div>
    )

}


export default HomePage;

