import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuiz } from "./services/quiz_service"

function App() {

  let [quiz, setQuiz] = useState([] as any)

  useEffect(() => {
    async function getquestion() {
      const data = await getQuiz(5, "easy")
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
      <h3>{quiz[1].question}</h3>
      <ul className="list">{quiz[1].options.map((value: React.ReactNode, ind: string | number | null | undefined) => {
        return <li key={ind}>{value}</li>
      })}</ul>

    </div>
  );
}

export default App;
