import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar/Navbar";
import QuizHeader from "../components/Quiz/QuizHeader";
import QuizBody from "../components/Quiz/QuizBody";
import Axios from "axios"; Axios;
import {Redirect, useParams, useHistory} from 'react-router-dom'
import QuizTakerInfo from "../components/Quiz/QuizTakerInfo";
import QuizInfoDialog from "../components/Quiz/QuizInfoDialog";
import Button from "../components/shared/Button";


const QuizTakingPage = (props)=>{
    let id = useParams().id
    let [respondent, setRespondent] = useState({
        'name': '',
        'email': '',
    })
    let [sections, setSections] = useState({})
    let [quiz, setQuiz] = useState({})
    let history = useHistory()

    useEffect(()=>{
        Axios.get(`/api/quiz/${id}`).then(
            result => {
                console.log(result);
                setQuiz(result.data.attributes)
                setSections(result.data.relationship.sections)
            }
        ).catch( err => {
            console.log(err.response)
        })
    }, [])

    const handleQuizTakeInfoChange = (event)=> {
        setRespondent({
            ...respondent,
            [event.target.name]: event.target.value
        })
    }

    const handleSectionChange = (event, sectionKey, questionKey, choiceKey, isOptionClick=false) => {
        if(isOptionClick){
            let key = event.target.name
            let choice = sections.data[sectionKey].questions[questionKey].answers[choiceKey]
            let choices = sections.data[sectionKey].questions[questionKey].answers

            for(let i=0; i<choices.length ;i++){
                choices[i].is_correct=0
            }
            choice.is_correct = 1
            setSections({
                ...sections,
            })
        }
        console.log(sections)
    }

    const getChosenChoicesFromState = ()=> {
        let data = [ ]
        console.log('getting')
        console.log(sections.data.length)

        for(let a =0; a<sections.data.length;  a++){
            let questions = sections.data[a].questions
            console.log(questions)

            for (let i =0;i< questions.length; i++){
                let choices = questions[i].answers
                for (let j =0; j<choices.length; j++){
                    if(choices[j].is_correct){
                        let object = {
                            'question_id': questions[i].id,
                            'section_id': sections.data[a].id,
                            'chosen_choice_id': choices[j].id,
                        }
                        data.push(object)
                        break
                    }

                }
            }
        }
        return data
    }
    const onSubmitButtonClick = (event)=> {
        let data = {
            'info': respondent,
            'quiz': {
                'id': id,
            },
            'answers':getChosenChoicesFromState()
        }
        console.log(data)

        axios.post(`/api/quiz/${id}/answer`, data).then(
            result => {
                console.log(result)
                history.push({
                    pathname: `/result/${id}`,
                    data: {
                        'total_score' : result.total_score
                    }
                })
                // <Link
            }
        ).catch( err => {
            console.log(err.response)
        })
    }

    return (
        <div>
            <Navbar/>
            <div className="flex-center position-ref full-height container quiz">
                <Button text={'Submit'} style={{marginLeft: 'auto'}} onClick={onSubmitButtonClick}/>
                <QuizTakerInfo respondent={respondent} onChange={handleQuizTakeInfoChange} />
                <QuizInfoDialog  data={quiz} isEdit={false}/>
                <QuizBody data={sections} isEdit={false} onChange={handleSectionChange} />
            </div>
        </div>
    );


}

export default QuizTakingPage;
