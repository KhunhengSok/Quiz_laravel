import React, {PureComponent, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

const QuizInfoDialog = (props) => {
    const {register, handleSubmit, watch, errors} = useForm();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    /*
        description
        title
        submit handler
    */


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
        padding:"0px",
    }

    useEffect( ()=>{
        setTitle(props.data.title)
        setDescription(props.data.description)
    }, [])


    return (
        <div className='quiz'>
           <form>
               <div className={'input-field'}>
                   <input name="title" type="text" className="validate title" placeholder={"Title"}
                          value={props.data.title} disabled={!props.isEdit} onChange={ props.onChange}
                          style={inputStyle} ref={register}/>
                   {errors.quiz_title && errors.quiz_title.message}
               </div>

               <div className={'input-field'}>
                   <input name="description" type="text" placeholder="Description" className="validate" disabled={!props.isEdit}
                          style={inputStyle} value={props.data.description} ref={register} onChange={props.onChange}/>
                   {errors.quiz_description && errors.quiz_description.message}
               </div>
           </form>
        </div>
    );

}


export default QuizInfoDialog;
