import React, {Fragment, useEffect, useState} from 'react';
import EditChoices from "../Choice/EditChoices";
import Button from "../shared/Button";

const QuizComponent = (props) => {
    const [quiz, setQuiz] = useState({})

    /* useEffect(() => {
         axios.get(`/api/quiz/${id}`).then(result => {
             console.log(result);
             setQuiz(result.data.attributes)
         }).catch(err => {
             console.log(err);
         })
     }, [])*/


    /*  title
      description
      Total score:

          published date
      dateline*/

    return (
        <div className={'question'} style={{display: "flex", flexDirection: 'row'}}>
            <div className={'flex-column'} style={{marginRight:'20px'}}>
                <span className={"title"}>{props.quiz.title}</span>
                <span style={{marginBottom: "20px"}}>{props.quiz.description}</span>
                <div style={{marginTop: "auto"}}>
                    <span>Total time: </span>
                    <span>{props.quiz.total_time}</span>
                </div>
            </div>
            <div className={'flex-column'} style={{marginLeft: "auto"}}>
                <span className={'no-wrap'}>Published date:</span>
                <span className={'no-wrap'}>{props.quiz.published_date}</span>
                <div style={{marginTop: "auto"}} className={'no-wrap'}>
                    <span>Deadline:  </span>
                    <span id={'deadline'}>xxxxx</span>
                </div>
            </div>

        </div>
    )
}

export default QuizComponent
