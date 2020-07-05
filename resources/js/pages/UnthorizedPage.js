import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

class NotFoundPage extends PureComponent {

    render() {
        const myStyle = {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',

            alignItems: 'center'
        }

        return (
            // <!-- purple x moss 2020 -->
            <div className={'body-404'}>
                <Navbar/>

                <div className="mainbox">
                    <div className="err mt-5">Unauthorized</div>
                    {/*<i className="far fa-question-circle fa-spin">0</i>
                    <div className="err2">4</div>*/}
                    {/*<div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to='/'> Home </Link> and try from there.</p></div>*/}
                </div>
            </div>
        )
    }
}

export default NotFoundPage
