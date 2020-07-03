import React, {PureComponent, useEffect, useState} from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";



import Navbar from "../components/navbar/Navbar";
import QuizInfoDialog from "../components/Quiz/QuizInfoDialog";


export default function CreateQuizPage(props) {
    let id = 1 ;
    let history = useHistory()

    useEffect( ()=>{
        //axios
    }, [])


    if(id!= 0) return <Redirect to={`${id}/edit`} />
    else return <div></div>

}


