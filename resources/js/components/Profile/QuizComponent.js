import React, {useEffect, useState} from 'react';
import EditChoices from "../Choice/EditChoices";
import Button from "../shared/Button";

const QuizComponent = (props) => {
    const [quiz, setQuiz] = useState({})

    useEffect( ()=> {
        axios.get(`/api/quiz/${id}`).then(result => {
            console.log(result);
            setQuiz(result.data.attributes)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <Fragment>
            <div className={'mx-5 question'} style={{display: "flex", flexDirection: 'column'}}>
                <div style={{display: 'flex', flexDirection: 'row', marginRight: '20px', margin: '0px', padding: '0px'}}>
                    <div >
                        <input type="text" placeholder="Question" value={props.question.question} style={{margin: "0p", paddingLeft: "10px"}}
                               name={'question'} className="question-title" onChange={() => {}} ref={register} disabled={props.disabled}/>
                        <EditChoices options={props.question.answers} />
                    </div>

                    <div style={{width: "10%", marginLeft: '30px'}} className="align-score">
                        {/*<label htmlFor='score'>Score: </label>*/}
                        <input id='score' name={'max_score'} type="number" style={{margin: '0px', padding: '0px'}} disabled={props.disabled}
                               value={props.question.max_score} className="question-score" ref={register} onChange={() => {}}/>
                        <p style={{} }>Score</p>
                    </div>
                </div>

                <Button className={'align-bottom-right'} text={'Answer Key'} onClick={() => {}}/>
            </div>
        </Fragment>
    )
}
