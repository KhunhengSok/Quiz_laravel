import React, {Fragment} from "react";
import {getLocalDate} from "../../pages/util";
import {useForm} from "react-hook-form";


const StartDataInput = (props) => {
    const {register, handleSubmit, watch, errors} = useForm();

    let myStyle = {
        whiteSpace: 'nowrap',
        padding: '5px 15px 5px 25px'

    }

    console.log(props)
    return (
        <Fragment>
            <div className={'mt-4'} style={myStyle}>Date:</div>
            <input className="form-control" name="start_date" /*value={getLocalDate(props.data.start_time)}*/ value={props.data.start_date} type="date" disabled={props.disabled}
                   onChange={props.onChange} ref={register}/>
        </Fragment>
    )
}

export default StartDataInput ;
