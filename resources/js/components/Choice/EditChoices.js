import React from "react";
import Choice from "./EditChoice";

const EditChoices =  (props)=>{
    let option = 'Option'
    return (
       <div>
           {/*for loop*/}
           <Choice checked={true} option={option} />
           <Choice checked={false} option={option}/>
           <Choice checked={false} option={option}/>
           <Choice checked={false} option={option}/>
       </div>
    )
}

export default EditChoices;
