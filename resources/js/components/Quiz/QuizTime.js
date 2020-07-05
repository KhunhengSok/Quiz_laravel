import React from "react";

import StartTimeInput from "./StartTimeInput";
import TotalTimeInput from "./TotalTimeInput";
import StartDataInput from "./StartDateInput";

const QuizTime = (props) => {
    let timeStyle = {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'row',
        padding: '0px',
        margin: '0px'
    }

    return (
        <div style={timeStyle}  className="m-4">
            <StartDataInput {...props} />
            <StartTimeInput {...props} />
            <TotalTimeInput {...props}/>
        </div>
        // <div style={{
        //     display: "flex",
        //     justifyContent: "space-between",
        //     flexDirection: 'row',
        //     padding: '0px',
        //     margin: '0px'
        // }}
        //      className="m-0">
        //     Start time : <input className="form-control" type="time"/>
        //     Total time:  <input type="number" className="form-control"/>
        // </div>
    )
}

export default  QuizTime ;
