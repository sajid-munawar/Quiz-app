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
  console.log(quiz[0].options)
  return (
    <div className="App">
      {/* <h4>{quiz[0].options}</h4> */}
      <QuestionCard
      question={quiz[0].question}
      options={quiz[0].options}
      />

    </div>
  );
}

export default App;
