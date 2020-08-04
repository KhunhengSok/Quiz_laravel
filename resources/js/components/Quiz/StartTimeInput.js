import React, {Fragment} from "react";
import {getLocalDate, getLocalTime} from "../../pages/util";
import {useForm} from "react-hook-form";



const StartTimeInput = (props) => {
    const {register, handleSubmit, watch, errors} = useForm();

    let myStyle = {
        whiteSpace: 'nowrap',
        padding: '5px 15px 5px 25px'
    }

    return (
       <Fragment>
           <div className={'mt-4'} style={myStyle}>Start time:</div>
           <input className="form-control" /*value={getLocalTime(props.data.start_time)}*/ value={props.data.start_time} type="time" disabled={props.disabled}
                    onChange={ props.onChange} ref={register} name={"start_time"}/>
       </Fragment>
    )
}

export default StartTimeInput ;
