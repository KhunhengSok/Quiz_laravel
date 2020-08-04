import React from "react";

const Choice = (props) => {
    let value = 1;

    if(props.checked){
        return (
            <div className={'option'}>
                <label>
                    <input name={'option_order'} type='radio' disabled={true} checked />
                    <span>{props.option}</span>
                    {/*<input name={"choice"} value={props.option} />*/}
                </label>
            </div>
        )
    }else{
        return(
            <div className={'option'}>
                <label>
                    <input name={'option_order'} type='radio' disabled={true} />
                    <span>{props.option}</span>
                </label>
            </div>
        )
    }

}

export default Choice;
