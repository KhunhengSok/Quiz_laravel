import {useState} from "react";
import React from "react";
import {useForm} from "react-hook-form";

const  EditSection = (props) => {
    const [state, setState] = useState()
    const {register, handleSubmit, watch, errors} = useForm();
    let score = 0;

    const myStyle = {
        padding: '0px',
        margin: '0px'
    }

    const handleBlur = (data) =>{
        console.log(data)
        console.log('blur')
    }

    return (
        <div className="mx-4" style={{display: 'flex', justifyContent: "space-between"}}>
            <div style={{width: "100%"}}>
                <div className={'input-field'}>
                    <input type="text" name={'section'} className="validate title" onChange={() => {}}
                           placeholder={'Section Name'} value={''} disabled={props.disabled} onBlur={handleBlur}
                           style={{border: '0px', margin: '0px', padding: '0px'}} ref={register}/>
                </div>

                <div className={'input-field'}>
                    <input type="text"  name={'description'} placeholder="Description" onBlur={handleBlur}
                           className="validate input-field" placeholder={'Description'} value={''} disabled={props.disabled}
                           style={{border: '0px', margin: '0px', padding: '0px'}} onChange={() => {}} ref={register}/>
                </div>
            </div>

            <span className="align-right ml-4" style={{margin: 'auto'}}>
                <p className="align-right ml-2" style={{fontSize: '1.4rem', whiteSpace: 'nowrap'}}>Score: {props.score}  </p>
            </span>
        </div>
    )
}

export default EditSection;
