import Navbar from "../navbar/Navbar";
import QuizInfoDialog from "./QuizInfoDialog";
import QuizTime from "./QuizTime";
import React from "react";
import Button from "../shared/Button";

/*quizinfodialog
quiztime*/
const QuizHeader = (props) => {
    return (
        <div>
            <div className='my-4'>
                <h1 className="quiz-header">Create Quiz</h1>
                <div className="m-2 align-right">
                    <Button text={"Save"} onClick={props.onSaveClick}/>
                    {/*<Button text={"Publish"} onClick={() => {
                    }}/>*/}
                </div>

                <QuizInfoDialog  {...props}/>
                <QuizTime {...props}/>
            </div>
        </div>
    )
}

export default QuizHeader;
