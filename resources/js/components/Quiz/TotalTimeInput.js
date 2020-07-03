import React, {Fragment} from "react";

const TotalTimeInput = () =>{
    let myStyle = {
        whiteSpace: 'nowrap',
        padding: '5px'
    }


    return (
        <Fragment>
            {/*<p style=" white-space: nowrap" className="m-4">Total time: </p>*/}
            {/*<span  defaultValue={"Total time:"} style=" white-space: nowrap" className="m-4" />*/}
            {/*<div  className="m-4" style={myStyle}>*/}
            {/*    Total time :*/}
            {/*</div>*/}
            <div className={'m-4'} style={myStyle}>Total time :</div>
            <input type="number" className="form-control" />
        </Fragment>
    )
}

export default TotalTimeInput ;
