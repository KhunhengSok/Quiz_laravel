import React from "react";
import Choice from "./EditChoice";

const EditChoices = (props) => {
    let option = 'Option'

    return (
        <div>
            <form>
                {/*for loop*/}
                <Choice checked={true} option={option}  {...props}/>
                <Choice checked={false} option={option} {...props}/>
                <Choice checked={false} option={option} {...props}/>
                <Choice checked={false} option={option} {...props}/>
            </form>
        </div>
    )
}

export default EditChoices;
