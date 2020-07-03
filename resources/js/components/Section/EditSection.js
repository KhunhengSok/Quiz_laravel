import {useState} from "react";
import React from "react";
import {useForm} from "react-hook-form";

const EditSection = (props) => {
    const [state, setState] = useState()
    const {register, handleSubmit, watch, errors} = useForm();
    let score = 0;

    const myStyle = {
        padding: '0px',
        margin: '0px'
    }

    return (
        <div className="mx-4" style={{display: 'flex', justifyContent: "space-between"}}>
            <div style={{width: "100%"}}>
                <div className={'input-field'}>
                    <input type="text" name={'section'} value="" className="validate title" onChange={() => {}}
                           placeholder={'Section Name'} value={''}
                           style={{border: '0px', margin: '0px', padding: '0px'}} ref={register}/>
                </div>

                <div className={'input-field'}>
                    <input type="text"  name={'description'} placeholder="Description"
                           className="validate input-field" placeholder={'Description'} value={''}
                           style={{border: '0px', margin: '0px', padding: '0px'}} onChange={() => {}} ref={register}/>
                </div>
            </div>

            <span className="align-right ml-4" style={{margin: 'auto'}}>
                <p className="align-right ml-2" style={{fontSize: '1.4rem', whiteSpace: 'nowrap'}}>Score: {score}  </p>
                {/*<input name={'score'} type={'number'} className={'inline'} value={props.score}/>*/}
            </span>
        </div>
    )
}

export default EditSection;
