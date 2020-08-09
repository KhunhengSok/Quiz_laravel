import React, {PureComponent, useEffect, useState} from 'react';
import Navbar from "../components/navbar/Navbar";
import Button from "../components/shared/Button";
import Auth from "../Auth";
import {Redirect, Link} from 'react-router-dom';
import PageNotFound from "./NotFoundPage";
import QuizComponent from './../components/Profile/QuizComponent'

const UserProfilePage = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(Auth.isAuthenticated())
    const [isRedirect, setRedirect] = useState(false)
    const [quiz, setQuiz] = useState([])


    useEffect(() => {
        setLoggedIn(Auth.isAuthenticated())

        let id = Auth.getUser().id
        axios.get(`/api/user/${id}/quiz`).then(result => {
            setQuiz(result.data.data[0].quizzes)
            console.log(result.data.data[0].quizzes)
        }).catch(err => {
            console.log(err);
        })

    }, [])

    const handleLogOut = () => {
        Auth.logout();
        setRedirect(true);
    }

    if (isRedirect) {
        return <Redirect to='/'/>
    }

    if (isLoggedIn == true) {
        let ele = []
        for (let i =0 ; i<quiz.length; i++) {
            ele.push(<QuizComponent quiz={quiz[i]} key={i}/>)
        }

        return (
            <div>
                <Navbar/>
                <div className={'container'}>
                    {/*<h1>Profile Page</h1>&/}
                    {/*<QuizComponent quiz={}/>*/}
                    {ele}
                    <Button onClick={handleLogOut} style={{float: 'right'}} text={'Log out'}/>

                </div>
            </div>
        );
    } else {
        return (
            <div>
                <PageNotFound/>
            </div>
        )
    }

}

export default UserProfilePage;
