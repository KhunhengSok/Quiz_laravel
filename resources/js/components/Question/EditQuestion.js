import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Choice from "../Choice/EditChoice";
import Button from "../shared/Button";
import EditChoices from "../Choice/EditChoices";

const EditQuestion = (props) => {
    const [state, setState] = useState()
    const {register, handleSubmit, watch, errors} = useForm();

    const handleBlur = (data)=>{

    }

    console.log(`question `)
    console.log(props)

    return (
        <div className={'mx-5 question'} style={{display: "flex", flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'row', marginRight: '20px', margin: '0px', padding: '0px'}}>
                <input type="text" placeholder="Question" value={props.question.question} style={{margin: "0p", paddingLeft: "10px"}}
                       name={'question'} className="question-title" onChange={() => {}} ref={register} disabled={props.disabled}/>
                <div style={{width: "10%", marginLeft: '20px'}} className="align-score">
                    {/*<label htmlFor='score'>Score: </label>*/}
                    <input id='score' name={'max_score'} type="number" style={{margin: '0px', padding: '0px'}} disabled={props.disabled}
                           value={props.question.max_score} className="question-score" ref={register} onChange={() => {}}/>
                    <p style={{} }>Score</p>
                </div>
            </div>

            <EditChoices options={props.question.answers} />
            <Button className={'align-bottom-right'} text={'Answer Key'} onClick={() => {}}/>
        </div>
    )
}

export default EditQuestion

