import React, {PureComponent} from 'react';
import {useForm} from "react-hook-form";
import {TextField} from "@material-ui/core";
import M from 'materialize-css'
import {TextInput} from 'react-materialize';


const QuizInfoDialog = (props) => {
    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    let quizTitle = props.quiz.quiz_title ? props.quiz.quiz_title : 'Untitled'
    let quizDescription = props.quiz.quiz_description ? props.quiz.quiz_description : ''

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


    return (
        <div className='quiz'>
           <form>
               <div className={'input-field'}>
                   <input name="quiz_title" type="text" className="validate title" placeholder={"Title"}
                          value={'Untitled'}
                          onChange={ ()=> {}}
                          style={inputStyle} ref={register({required: "Title is required"})}/>
                   {errors.quiz_title && errors.quiz_title.message}
               </div>

               <div className={'input-field'}>
                   <input name="quiz_description" type="text" placeholder="Description" className="validate"
                          style={inputStyle} ref={register({required: "Description is required"})} onChange={()=>{}}/>
                   {errors.quiz_description && errors.quiz_description.message}
               </div>
           </form>
        </div>
    );

}


export default QuizInfoDialog;
