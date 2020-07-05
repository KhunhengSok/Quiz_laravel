import React, {Fragment} from "react";
import {getLocalDate, getLocalTime} from "../../pages/util";

const StartTimeInput = (props) => {
    let myStyle = {
        whiteSpace: 'nowrap',
        padding: '5px 15px 5px 25px'
    }

    return (
       <Fragment>
           <div className={'mt-4'} style={myStyle}>Start time:</div>
           <input className="form-control" value={getLocalTime(props.data.start_time)} type="time" disabled={props.disabled}
                    onChange={ (date) => console.log(date)}/>
       </Fragment>
    )
}

export default StartTimeInput ;
