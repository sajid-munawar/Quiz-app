import React, { useEffect, useState } from 'react';
// import getQuiz from "./services/quiz_api"
import './App.css';


function App() {
  let [data1,setData1]=useState([])
  useEffect (()=>{
    async function getQuiz(){
      const response=await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      const data=await response.json();
      setData1(data)
    }getQuiz() 
  },[])
  if (data1.length<1){
    return <h1>Loading...</h1>
  }
  console.log(data1[1])
  // console.log(data1)
  return (
    <div className="App">
      {/* <ul>
        {data1.map((data1,ind)=>{
          return <li>
            {data1}
          </li>
        })}
      </ul> */}
      

    </div>
  );
}

export default App;
