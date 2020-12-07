import React, { FC } from 'react';
import { questionPropsType } from "./../types/quiz_type";

const QuestionCard: FC<questionPropsType> = ({ question, options,callback }) => {
    // console.log("question="+question)
    // console.log("oop= "+options)
    const handleUserSelected=((ev:any)=>{
        console.log(ev.target.value)
    })
    return <div>
        <h2>{question}</h2>
        <form onSubmit={callback}>{options.map((opt: string, ind: number) => {
            return <div key={ind}> 
            <label>
                <input type="radio"
                 name="opt"
                  value={opt}
                  onChange={handleUserSelected}
                  />
                {opt}
                </label> 
                </div>
        })}
        <input type="submit" />
        </form>

    </div>
}
export default QuestionCard;