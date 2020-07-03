import React, {PureComponent, useEffect, useState} from 'react';
import {Axios} from 'axios' ;

import Navbar from "../components/navbar/Navbar";
import {useParams} from 'react-router-dom'
import QuizInfoDialog from "../components/Quiz/QuizInfoDialog";
import QuizTime from "../components/Quiz/QuizTime";
import QuizHeader from "../components/Quiz/QuizHeader";
import QuizFooter from "../components/Quiz/QuizFooter";
import QuizBody from "../components/Quiz/QuizBody";


const EditQuizPage = () => {
    let id = useParams().id

    useEffect( ()=>{
        console.log('hello world')
    }, [5])

    const onQuizTitleChange = (data) => {
        setQuiz( prevQuiz =>{
            // let newQuiz = [...prevQuiz]
            console.log(prevQuiz)
        })
    }

    const onQuizDescriptionChange = (data) =>{
        setQuiz( prevQuiz =>{
            console.log(prevQuiz)
        })

    }
    const handleQuizChange = (data) => {
        setQuiz( data )
    }


    useEffect( ()=>{
        //post request
    }, [quiz])

    const [quiz, setQuiz] = useState({
        'quiz_title': "CG Exam",
        'quiz_description': "Complete the exam before 2:30pm"
    });
    const [section, setSection] = useState([]);



    useEffect( ()=> {
        //api
    },[])


    const handleAddQuestion = () =>{}
    const handleAddSection = () => {}


    return (
        <div>
            <Navbar/>
            <div className="flex-center position-ref full-height container quiz">

                <QuizHeader quiz={quiz}/>
                <QuizBody/>
                <QuizFooter />

            </div>
        </div>
    );
}


export default EditQuizPage;
