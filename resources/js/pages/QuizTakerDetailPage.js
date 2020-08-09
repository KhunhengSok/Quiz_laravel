import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar/Navbar";
import Axios from 'axios'
import {Redirect, useParams, useHistory} from 'react-router-dom'
import {getLocalDate, getLocalTime} from "./util";


const QuizTakerDetailPage = (props) => {
    let id = useParams().id
    let [answers, setAnswers] = useState([])

    useEffect(() => {
        Axios.get(`/api/quiz/${id}/answer`).then(
            result => {
                console.log(result.data.data)
                setAnswers(result.data.data)
            }
        ).catch(err => {
            console.log(err)
        })
    }, [])

    const convertTimeLocally = (timeString) => {
        let date = new Date(timeString)
        date = new Date(date.getTime() + 7 * 1000 * 60 *60 )
        return getLocalDate(date.toString()) + " " + getLocalTime(date.toString())
    }

    let ele = []
    for (let i = 0; i < answers.length; i++) {
        ele.push(
            <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{answers[i].respondent.name}</td>
                <td>{answers[i].respondent.email}</td>
                <td>{convertTimeLocally(answers[i].response.finish_time)}</td>
                <td>{answers[i].response.scored}</td>
            </tr>
        )
    }

    return (
        <div>
            <Navbar/>
            <table className="table table-bordered container my-5">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Finish time</th>
                    <th scope="col">Score</th>
                </tr>
                </thead>
                <tbody>

                {ele}

                </tbody>
            </table>
        </div>
    )
}

export default QuizTakerDetailPage
