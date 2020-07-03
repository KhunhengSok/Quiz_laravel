import React, {useState} from "react";
import Button from "../shared/Button";

const QuizFooter = (props) =>{
    const [state, setState] = useState()
    return (
        <div className={'align-right m-2'}>
            <Button text={"Add Section"} onClick={ ()=>{} } />
            <Button text={"Add Question"} onClick={ ()=>{} } />
        </div>
    )
}

export default QuizFooter ;
