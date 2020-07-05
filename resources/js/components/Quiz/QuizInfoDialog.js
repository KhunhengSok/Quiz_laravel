import React, {PureComponent, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

const QuizInfoDialog = (props) => {
    const {register, handleSubmit, watch, errors} = useForm();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    const onSubmit = data => {
        console.log(data);
    }

    const handleTitleChange = data => {
        // props.handleQuizChange()
        // console.log()
    }

    const handleDescriptionChange = data => {

    }


    const inputStyle = {
        border: "0px",
        margin: "0px",
        padding: "0px",
    }

    useEffect( ()=>{
        console.log(props)
        setTitle(props.data.title)
        setDescription(props.data.description)
    }, [])

    return (
        <div className='quiz'>
           <form>
               <div className={'input-field'}>
                   <input name="quiz_title" type="text" className="validate title" placeholder={"Title"}
                          value={title} disabled={props.disabled} onChange={ ()=> {}}
                          style={inputStyle} ref={register}/>
                   {errors.quiz_title && errors.quiz_title.message}
               </div>

               <div className={'input-field'}>
                   <input name="quiz_description" type="text" placeholder="Description" className="validate" disabled={props.disabled}
                          style={inputStyle} value={description} ref={register} onChange={()=>{}}/>
                   {errors.quiz_description && errors.quiz_description.message}
               </div>
           </form>
        </div>
    );

}


export default QuizInfoDialog;
