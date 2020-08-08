import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Choice from "../Choice/EditChoice";
import Button from "../shared/Button";
import EditChoices from "../Choice/EditChoices";

const EditQuestion = (props) => {
    const [state, setState] = useState()
    const {register, handleSubmit, watch, errors} = useForm();


    return (
        <div className={'question'} style={{display: "flex", flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'row', marginRight: '20px', margin: '0px', padding: '0px'}}>
                <div style={{width: '100%'}}>
                    <input type="text" placeholder="Question" value={props.question.question} style={{margin: "0p", paddingLeft: "10px"}}
                           name={'question'} className="question-title" onChange={(e)=>props.onChange(e, props.sectionKey, props.questionKey)} ref={register} disabled={!props.isEdit}/>
                    <EditChoices options={props.question.answers} {...props} />
                </div>

                <div style={{width: "10%", marginLeft: '30px'}} className="align-score">
                    <input id='score' name={'max_score'} type="number" style={{margin: '0px', padding: '0px'}} disabled={!props.isEdit}
                           value={props.question.max_score} className="question-score" ref={register} onChange={(e)=>props.onChange(e, props.sectionKey, props.questionKey)}/>
                    <p style={{} }>Score</p>
                </div>
            </div>

            {/*<Button className={'align-bottom-right'} text={'Answer Key'} onClick={() => {}}/>*/}
        </div>
    )
}

export default EditQuestion

