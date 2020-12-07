import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuiz } from "./services/quiz_service";
import {quiz_type} from "./types/quiz_type";
import QuestionCard from "./components/QuestionCard"

function App() {

  let [quiz, setQuiz] = useState<quiz_type[]>([])
  let [currentStep,setCurrentStep] =useState(0)
  let [score,setScore]=useState(0)
  let [showResult,setShowResult]=useState(false)

  useEffect(() => {
    async function getquestion() {
      const data:quiz_type[] = await getQuiz(2, "easy")
      //  console.log(data)
      setQuiz(data)
    }
    getquestion();
  }, [])

  const handleSubmit = ((e:React.FormEvent<EventTarget>,userAns:string)=>{
    const currentQuestion:quiz_type=quiz[currentStep]
    if (userAns===currentQuestion.correct_answer){
      setScore(++score)
    }
    console.log(userAns + " =userAns" +currentQuestion.correct_answer + " =correct Ans")
    console.log(score)
    e.preventDefault();
    if (currentStep!==quiz.length-1)
     setCurrentStep(++currentStep)
    else 
     setShowResult(true)
    
  })
  //  val = { quiz[1].options }
  // console.log(quiz)
  // console.log(quiz[0].options)
  if (!quiz.length) {
    return <h1>Loading</h1>
  }
  if (showResult) {
    return <div>
      <h1>Your Score is {score} out of {quiz.length}</h1>
    </div>
  }
  return (
    <div className="App">
      {/* <h4>{quiz[0].options}</h4> */}
      <QuestionCard
      question={quiz[currentStep].question}
      options={quiz[currentStep].options}
      callback={handleSubmit}
      />

    </div>
  );
}

export default App;
