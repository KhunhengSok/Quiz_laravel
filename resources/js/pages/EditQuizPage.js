import React, { useEffect, useState} from 'react';
import {Axios} from 'axios' ;

import Navbar from "../components/navbar/Navbar";
import {useParams} from 'react-router-dom'
import QuizInfoDialog from "../components/Quiz/QuizInfoDialog";
import QuizTime from "../components/Quiz/QuizTime";
import QuizHeader from "../components/Quiz/QuizHeader";
import QuizFooter from "../components/Quiz/QuizFooter";
import QuizBody from "../components/Quiz/QuizBody";
import "materialize-css/dist/css/materialize.min.css"


const EditQuizPage = () => {
    let id = useParams().id
    const [disabled, setDisabled] = useState(false)
    // const [quiz, setQuiz ] = useState({
    //     'title': "CG Exam",
    //     'description': "Complete the exam before 2:30pm"
    // })
    const [quiz, setQuiz] = useState({})
    const [sections, setSections] = useState({})

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



    useEffect( ()=>{
        console.log('use effect')
        //post request
        axios.get(`/api/quiz/${id}`).then( result => {
            console.log(result);
            setQuiz(result.data.attributes)
            setSections(result.data.relationship.sections)

        }).catch( err => {
            console.log(err);
        })
    }, [])




    const handleAddQuestion = () =>{}
    const handleAddSection = () => {}


    return (
        <div>
            {console.log('render')}
            <Navbar/>
            <div className="flex-center position-ref full-height container quiz">
                <QuizHeader disabled={disabled} data={quiz}/>
                <QuizBody disabled={disabled} data={sections}/>
                <QuizFooter disabled={disabled} />

            </div>
        </div>
    );
}


export default EditQuizPage;
