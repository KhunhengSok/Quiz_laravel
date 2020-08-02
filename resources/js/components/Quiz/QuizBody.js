import React, {Fragment, useState} from "react";
import EditSection from "../Section/EditSection";
import EditQuestion from "../Question/EditQuestion";
import Section from "../Section/Section";


/*section
question*/


const QuizBody = (props)=>{
    // const [state, setState] = useState();
    const data = props.data.data

    let ele = []

    if(data){
        for(let i=0 ; i<data.length; i++){
            ele.push(<Section key={i} section={data[i]} {...props} />)
        }
    }




    return (
        <Fragment>
            {ele}
        </Fragment>

    )

   /* return(
        <Fragment>
            <EditSection {...props} />
            <EditQuestion {...props}/>
            <EditQuestion {...props}/>
            <EditQuestion {...props} />
        </Fragment>
    )*/

}

export  default  QuizBody;
