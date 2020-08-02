import React, {Fragment, useEffect, useState} from 'react';
import EditSection from "./EditSection";
import EditQuestion from "../Question/EditQuestion";
import EditChoices from "../Choice/EditChoices";
import EditChoice from "../Choice/EditChoice";


const Section = (props) => {
    const [isEdit, setIsEdit] = useState(props.isEdit || false)

    let questions = props.section.questions

    let ele = []
    let order = 1

    if (isEdit) {
        if (questions) {
            for (let i = 0; i < questions.length; i++) {
                if(questions[i].question_order == order){
                    ele.push(<EditQuestion key={i} question={questions[i]} {...props} />)
                    order +=1
                }


            }
        }
    } else {

    }

    if (isEdit) {
        return (
            <Fragment>
                <EditSection section={props.data} {...props}/>
                {ele}
            </Fragment>
        )
    } else {
        return (
            <Fragment>

            </Fragment>
        )
    }

}

export default Section
