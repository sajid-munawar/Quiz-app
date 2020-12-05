import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuiz } from "./services/quiz_service";
import {quiz_type} from "./types/quiz_type";
import QuestionCard from "./components/QuestionCard"

function App() {

  let [quiz, setQuiz] = useState<quiz_type[]>([])

  useEffect(() => {
    async function getquestion() {
      const data:quiz_type[] = await getQuiz(5, "easy")
      //  console.log(data)
      setQuiz(data)
    }
    getquestion();
  }, [])
  if (!quiz.length) {
    return <h1>Loading</h1>
  }
  //  val = { quiz[1].options }
  console.log(quiz)
  console.log(quiz[1].question)
  return (
    <div className="App">
      <QuestionCard
      question={quiz[0].question}
      option={quiz[0].options}
      />

    </div>
  );
}

export default App;
