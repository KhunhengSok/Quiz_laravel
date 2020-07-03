import React, {Fragment} from "react";

const StartTimeInput = () => {
    let myStyle = {
        whiteSpace: 'nowrap',
        padding: '5px'
    }

    return (
       <Fragment>
           <div className={'mt-4'} style={myStyle}>Start time:</div>
           <input className="form-control" type="time" />
       </Fragment>
    )
}

export default StartTimeInput ;
