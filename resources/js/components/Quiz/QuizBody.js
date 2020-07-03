import React, {Fragment, useState} from "react";
import EditSection from "../Section/EditSection";
import EditQuestion from "../Question/EditQuestion";

const QuizBody = (props)=>{
    const [state, setState] = useState();


    return(
        <Fragment>
            <EditSection />
            <EditQuestion />
            <EditQuestion />
            <EditQuestion />
        </Fragment>
    )

}

export  default  QuizBody;
