import React, { FC } from 'react';
import {questionPropsType} from "./../types/quiz_type";

const QuestionCard: FC<questionPropsType> = ({ question, options }) => {
    // console.log("question="+question)
    // console.log("oop= "+options)
    return <div>
        <h2>{question}</h2>
        <ul>{options.map((value:string,ind:number)=>{
            return <li key={ind}>{value}</li>
        })}</ul>

    </div>
}
export default QuestionCard;