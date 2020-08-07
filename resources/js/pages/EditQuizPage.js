import React, {useEffect, useState} from 'react';
import axios from 'axios'


import Navbar from "../components/navbar/Navbar";
import {Redirect, useParams} from 'react-router-dom'
import QuizInfoDialog from "../components/Quiz/QuizInfoDialog";
import QuizTime from "../components/Quiz/QuizTime";
import QuizHeader from "../components/Quiz/QuizHeader";
import QuizFooter from "../components/Quiz/QuizFooter";
import QuizBody from "../components/Quiz/QuizBody";
import "materialize-css/dist/css/materialize.min.css"
import {useFetch} from "../useFetch";
import Auth from "../Auth";


function EditQuizPage(props, location) {
    let count = 0
    // let id = useParams().id
    // const [loaded, setLoaded] = useState(false)
    let loaded = false
    const [disabled, setDisabled] = useState(false)
    const [id, setId] = useState(useParams().id)
    const [quiz, setQuiz] = useState({
        'title': '',
        'description': '',
        'start_time': '',
        'start_date': '',
        'total_time': ''
    })
    const [sections, setSections] = useState({
        data: []
    })
    const {data, loading} = useFetch(`/api/quiz/${id}`)


    useEffect(() => {
        //post request
        axios.get(`/api/quiz/${id}`).then(result => {
            console.log(result);
            setQuiz(result.data.attributes)
            setSections(result.data.relationship.sections)
        }).catch(err => {
            console.log(err);
        })
    }, [id,])


    const handleQuizInfoChange = (event) => {
        setQuiz({...quiz, [event.target.name]: event.target.value})

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

        if (typeof sectionKey!=='undefined' && typeof questionKey!=='undefined' && typeof choiceKey!=='undefined') {
            let key = event.target.name
            let choice = sections.data[sectionKey].questions[questionKey].answers[choiceKey]
            choice[key] = event.target.value
            setSections({
                ...sections,
            })

        } else if ( typeof sectionKey!=='undefined' && typeof questionKey!=='undefined') {
            let key = event.target.name
            let question = sections.data[sectionKey].questions[questionKey]
            question[key] = event.target.value
            setSections({
                ...sections,
            })
        } else if (typeof sectionKey!=='undefined') {
            let key = event.target.name
            let section = sections.data[sectionKey]
            section[key] = event.target.value
            setSections({
                ...sections,
            })
        }
    }

    const handleAddQuestion = (event) => {
        let choices = []
        let sections_ = sections.data
        let len = sections_.length
        let section = sections_[len - 1]
        let questions = section.questions

        for(let i=0; i<4; i++){
            let choice = {
                'choice' :'',
                'choice_order': i+1,
                'description': '',
                'is_correct': 0,
            }
            choices.push(choice)
        }
        let question = {
            'question': '',
            'max_score': 0,
            'answers': choices,
            'question_order': questions.length + 1
        }

        sections.data[len-1].questions.push(question)
        setSections({
            ...sections,
        })
    }

    const handleAddSection = (event) => {
        let length = 0
        if(typeof sections.data !== 'undefined'){
            length =  sections.data.length
        }

        let section = {
            'section': '',
            'title': '',
            'description': '',
            'quiz_id': id,
            'section_order': length + 1,
            'questions': []
        }
        sections.data.push(section)
        setSections({
            ...sections,
        })
        console.log(sections)

    }


    const getSectionsFromState = ()=> {
        let s = sections.data
        let data = []
        for(let i=0; i<s.length; i++){
            let object = {
                'title': s[i].title,
                'section_order': s[i].section_order ,
                'description': s[i].description
            }
            data.push(object)
        }
        return data
    }

    const getQuestionsFromState = () => {
        let data = [ ]
        let s = sections.data
        for(let i=0; i<s.length; i++){
            let q = s[i].questions
            for(let j =0 ;j<q.length; j ++){
                let object = {
                    'question': q[j].question,
                    'section_order': s[i].section_order,
                    'question_order': q[j].question_order,
                    'max_score':  q[j].max_score,
                }
                data.push(object)
            }
        }
        return data
    }

    const getChoicesFromState = ()=> {
        let data = [ ]
        let s = sections.data
        for(let i=0; i<s.length; i++){
            let q = s[i].questions
            for(let j =0 ;j<q.length; j ++){
                let a = q[j].answers
                for(let k =0; k< a.length; k++){
                    let object = {
                        'choice': a[k].choice,
                        'choice_order': a[k].choice_order,
                        'is_correct': a[k].is_correct,
                        'question_order': q[j].question_order,
                        'section_order': s[i].section_order,
                    }
                    data.push(object)
                }


            }
        }
        return data
    }





    const saveQuizClick = (event) => {
        getSectionsFromState()
        getQuestionsFromState()
        getChoicesFromState()
        let data = {
            'quiz': quiz,
            'sections': getSectionsFromState(),
            'questions': getQuestionsFromState(),
            'choices': getChoicesFromState()
        }
        console.log(data)
        axios.post(
            '/api/quiz',
              /*  headers: {
                    "Authorization": 'Bearer ' + Auth.getToken()
                }, data*/
                data
            ).then(
                result => {
                    console.log(result)
                }
            ).catch( e => {
                console.log(e)
                console.log(e.response)
            })

    }

    const PublishQuizClick = () => {

    }

    const handleChoicesChange = () => {

    }

    const handleAnswerKeyButtonClick = (event)=> {

    }


    return (
        <div>
            <Navbar/>
            <div className="flex-center position-ref full-height container quiz">
                <QuizHeader disabled={disabled} data={quiz} isEdit={true} onChange={(e) => handleQuizInfoChange(e)} onSaveClick={saveQuizClick}/>
                <QuizBody disabled={disabled} data={sections} isEdit={true} onChange={handleSectionChange} onAddSectionClick={handleAddSection} onAddQuestionClick={handleAddQuestion} edit={true}/>
                {/*<QuizFooter disabled={disabled} isEdit={true}/>*/}
            </div>
        </div>
    );


}


export default EditQuizPage;
