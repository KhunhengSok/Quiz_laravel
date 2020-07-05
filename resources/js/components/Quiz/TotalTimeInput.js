import React, {Fragment} from "react";

const TotalTimeInput = (props) =>{
    let myStyle = {
        whiteSpace: 'nowrap',
        padding: '5px 15px 5px 25px'
    }

    return (
        <Fragment>
            {/*<p style=" white-space: nowrap" className="m-4">Total time: </p>*/}
            {/*<span  defaultValue={    "Total time:"} style=" white-space: nowrap" className="m-4" />*/}
            {/*<div  className="m-4" style={myStyle}>*/}
            {/*    Total time :*/}
            {/*</div>*/}
            <div className={'mt-4'} style={myStyle}>Total time :</div>
            <input type="number" value={props.data.total_time} className="form-control" disabled={props.disabled}/>
        </Fragment>
    )
}

export default TotalTimeInput ;
