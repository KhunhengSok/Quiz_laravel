import React from "react";
import Choice from "./EditChoice";
import EditChoice from "./EditChoice";

const EditChoices = (props) => {
    let option = 'Option'

    let ele = []
    let choiceOrder = 1
    let choices = props.options

    while(choiceOrder <= choices.length  ){
        for(let i =0; i<choices.length; i++){
            if(choices[i].choice_order == choiceOrder){
                ele.push( <EditChoice key={i} option={choices[i].choice} checked={choices[i].is_correct} />)
                choiceOrder +=1
            }
        }
    }



    return (
        <div>
            <form>
               
                {ele}
            </form>
        </div>
    )
}

export default EditChoices;
