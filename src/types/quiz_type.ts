import { type } from "os"

export type question_type = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}
export type quiz_type ={
    answer: string
    question:string
    correct_answer:string
    options:string[]
}
export type questionPropsType ={
    question:string
    options:string[]
    callback:(e:React.FormEvent<EventTarget>,ans:string)=>void
}