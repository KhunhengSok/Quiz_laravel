import React, {Fragment, useState} from "react";
import EditSection from "../Section/EditSection";
import EditQuestion from "../Question/EditQuestion";

const QuizBody = (props)=>{
    const [state, setState] = useState();


    return(
        <Fragment>
            <EditSection {...props} />
            <EditQuestion {...props}/>
            <EditQuestion {...props}/>
            <EditQuestion {...props} />
        </Fragment>
    )

}

export  default  QuizBody;
