import React, {Fragment} from "react";
import {getLocalDate} from "../../pages/util";

const StartDataInput = (props) => {
    let myStyle = {
        whiteSpace: 'nowrap',
        padding: '5px 15px 5px 25px'

    }

    return (
        <Fragment>
            <div className={'mt-4'} style={myStyle}>Date:</div>
            <input className="form-control" value={getLocalDate(props.data.start_time)} type="date" disabled={props.disabled} />
        </Fragment>
    )
}

export default StartDataInput ;
