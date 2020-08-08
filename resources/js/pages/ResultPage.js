import React from "react";
import Navbar from "../components/navbar/Navbar";

const ResultPage = (props)=>{
    let myStyle = {
        fontSize: '2.5rem'
    }

    console.log(props)
    return(
       <div>
           <Navbar />
           <div className={'container'}>
               <h1 style={myStyle} className={'title'} >
                   Your total score: <b style={{fontSize: '3rem', color: '#00FF00'}}>{props.total_score}</b>
               </h1>
           </div>
       </div>
    )
}

export default  ResultPage;
