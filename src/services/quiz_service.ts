import {quiz_type,question_type} from "./../types/quiz_type";

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuiz=async(total:number,level:string):Promise<quiz_type[]>=>{
    const res=await fetch(`https://opentdb.com/api.php?amount=${total}&difficulty=${level}&type=multiple`)
    const {results}=await res.json()
    const quiz:quiz_type[]=results.map((questionObj:question_type)=>{
        return {
            question:questionObj.question,
            answer:questionObj.correct_answer,
            options:shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz;
}
