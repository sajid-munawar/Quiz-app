import React,{useEffect, useState} from 'react';
import './App.css';
import {getQuiz} from "./services/quiz_service"

function App() {
  let [quiz,setQuiz]=useState([])
  
useEffect (()=>{
   async function getquestion(){
     const data=await getQuiz(5,"easy")
    //  console.log(data)
    setQuiz(data)
   }
   getquestion();
},[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
