import React, { FC } from 'react';
const QuestionCard: FC<any> = ({ question, options }) => {
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