import React from "react";

const Choice = (props) => {
    let value = 1;

    if(props.isEdit){
        return (
            <div className={'option'}
                 style={{display: 'flex', flexDirection: 'column', alignContent: 'center', margin: '17px'}}>
                {/*onChange={(e)=>props.onChange(e, props.sectionKey, props.questionKey, props.choiceKey)}*/}
                {/*<label style={{display:'flex', flexDirection:'column', alignContent:'center'}}>*/}
                <label>
                    <input name={'choice_order'} value={props.choiceOrder} type='radio' checked={props.is_correct}
                           onClick={(e) => props.onChange(e, props.sectionKey, props.questionKey, props.choiceKey, true)}
                    />
                    <span>

                {/*option*/}
                        <input name={'choice'} type={'text'} value={props.option}
                               onChange={(e) => props.onChange(e, props.sectionKey, props.questionKey, props.choiceKey)}
                               style={{marginTop: '-12px'}}/>
                </span>
                </label>
            </div>
        )
    }else{
        return (
            <div className={'option'}
                 style={{display: 'flex', flexDirection: 'column', alignContent: 'center', margin: '17px'}}>
                {/*onChange={(e)=>props.onChange(e, props.sectionKey, props.questionKey, props.choiceKey)}*/}
                {/*<label style={{display:'flex', flexDirection:'column', alignContent:'center'}}>*/}
                <label>
                    <input name={'choice_order'} value={props.choiceOrder} type='radio'
                           onClick={(e) => props.onChange(e, props.sectionKey, props.questionKey, props.choiceKey, true)}
                    />
                    <span>

                {/*option*/}
                        <input name={'choice'} type={'text'} value={props.option} disabled={!props.isEdit}
                               onChange={(e) => props.onChange(e, props.sectionKey, props.questionKey, props.choiceKey)}
                               style={{marginTop: '-12px'}}/>
                </span>
                </label>
            </div>
        )
    }

}

export default Choice;
