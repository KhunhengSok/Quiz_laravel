import {useEffect, useState} from "react";
import Axios from "axios";

export const useFetch = url => {
    const [state, setState] = useState({data: null, loading: false })

    useEffect( ()=> {
        console.log('usefetch')
        setState(data => ({data: null, loading:true}))
        Axios.get(url).then( result => {
            console.log(result);
            // setQuiz(result.data.attributes)
            // setSections(result.data.relationship.sections)
            setState({data: result, loading: false})
        }).catch( err => {
            console.log(err);
        })
    }, [url])

    return state
}

