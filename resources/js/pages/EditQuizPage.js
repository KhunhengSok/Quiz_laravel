import React, {useEffect, useState} from 'react';
import {Axios} from 'axios' ;

import Navbar from "../components/navbar/Navbar";
import {Redirect, useParams} from 'react-router-dom'
import QuizInfoDialog from "../components/Quiz/QuizInfoDialog";
import QuizTime from "../components/Quiz/QuizTime";
import QuizHeader from "../components/Quiz/QuizHeader";
import QuizFooter from "../components/Quiz/QuizFooter";
import QuizBody from "../components/Quiz/QuizBody";
import "materialize-css/dist/css/materialize.min.css"
import {useFetch} from "../useFetch";


function EditQuizPage(props, location) {
    let count = 0
    // let id = useParams().id
    // const [loaded, setLoaded] = useState(false)
    let loaded = false
    const [disabled, setDisabled] = useState(false)
    const [id, setId] = useState(useParams().id)
    const [quiz, setQuiz] = useState({})
    const [sections, setSections] = useState({})
    const {data, loading} = useFetch(`/api/quiz/${id}`)


    const onQuizTitleChange = (data) => {
        setQuiz(prevQuiz => {
            // let newQuiz = [...prevQuiz]
            console.log(prevQuiz)
        })
    }

    const onQuizDescriptionChange = (data) => {
        setQuiz(prevQuiz => {
            console.log(prevQuiz)
        })

    }

    useEffect(() => {
        // console.log(id)
        // console.log(props)
        console.log('use effect')
        //post request
        axios.get(`/api/quiz/${id}`).then(result => {
            console.log(result);
            setQuiz(result.data.attributes)
            setSections(result.data.relationship.sections)
        }).catch(err => {
            console.log(err);
        })
    }, [id,])


    const handleAddQuestion = () => {

    }

    const handleAddSection = () => {

    }

    return (
        <div>
            <Navbar/>
            <div className="flex-center position-ref full-height container quiz">
                <QuizHeader disabled={disabled} data={quiz} isEdit={true} />
                <QuizBody disabled={disabled} data={sections} isEdit={true}/>
                <QuizFooter disabled={disabled} isEdit={true}/>
            </div>
        </div>
    );


}


export default EditQuizPage;
