import React, {PureComponent, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

const QuizTakerInfo = (props) => {
    const {register, handleSubmit, watch, errors} = useForm();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')




    const onSubmit = data => {
        console.log(data);
    }




    const inputStyle = {
        border: "0px",
        margin: "0px",
        padding:"0px",
    }



    return (
        <div className='quiz'>
            <form>
                <div className={'input-field'}>
                    <input name="name" type="text" className="validate title" placeholder={"Name"}
                           value={props.respondent.name} disabled={props.disabled} onChange={ props.onChange}
                           style={inputStyle} ref={register({required: "Name is required"})}/>
                </div>
                {errors.name && <span className={'error'}>{errors.name.message}</span>}


                <div className={'input-field'}>
                    <input name="email" type="text" placeholder="Email" className="validate" disabled={props.disabled}
                           style={inputStyle} value={props.respondent.email} ref={register({required: "Name is required"})} onChange={props.onChange}/>
                </div>
                {errors.email && <span className={'error'}>{errors.email.message}</span>}

            </form>
        </div>
    );

}


export default QuizTakerInfo;
