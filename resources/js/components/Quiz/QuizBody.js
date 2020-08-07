import React, {Fragment, useState} from "react";
import EditSection from "../Section/EditSection";
import EditQuestion from "../Question/EditQuestion";
import Section from "../Section/Section";
import QuizFooter from "./QuizFooter";


/*section
question*/


const QuizBody = (props)=>{
    // const [state, setState] = useState();
    const data = props.data.data

    let ele = []
    let order = 1

    if(data){
        while(order < data.length ){
            for(let i=0 ; i<data.length; i++){
                if(data[i].section_order == order){
                    ele.push(<Section key={i} section={data[i]} {...props} sectionKey={i}  />)
                    order +=1
                }
            }
        }
    }




    return (
        <Fragment>
            {ele}
            <QuizFooter {...props}/>
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
