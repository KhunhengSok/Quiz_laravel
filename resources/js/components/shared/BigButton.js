import React, {Fragment} from "react";
import {Link} from "react-router-dom";

const BigButton = (props) => {
    const myStyle = {
        width: '150px',
        height: '200px',
        margin: '5px',
        textSize: '1.2rem',
        textColor: '#ffffff',
        // marginTop: 'auto'
        /*backgroundColor: '#FFB746',
        border: 'none',
        paddingLeft: '30px',
        paddingRight: '30px',*/

    }

    // style={myStyle}>{props.text}
    return (
        /*<div className={'card'} >
            <button className={'card-body'} style={myStyle}>{props.text}</button>
        </div>*/
        <p>
            <Link to={props.link} style={{textDecoration: 'none'}}>
                <a className="btn btn-info btn-lg" onClick={props.onClick} style={myStyle}>
                    <div className="glyphicon glyphicon-shopping-cart"
                          style={{fontSize: '1.4rem', color: '#ffffff', marginTop: '70px'}}>{props.text}</div>
                </a>
            </Link>
        </p>
    )
}

export default BigButton
