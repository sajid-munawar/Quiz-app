import React, { FC,useState } from 'react';
import { questionPropsType } from "./../types/quiz_type";

const QuestionCard: FC<questionPropsType> = ({ question, options,callback }) => {
    let [selected,setSelected] =useState("")

    const handleSubmit=((ev:any)=>{
        setSelected(ev.target.value)
    })
    return <div>
        <h2>{question}</h2>
        <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selected)}>{options.map((opt: string, ind: number) => {
            return <div key={ind}> 
            <label>
                <input type="radio"
                 name="opt"
                  value={opt}
                  onChange={handleSubmit}
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