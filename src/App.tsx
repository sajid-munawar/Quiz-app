import React,{useEffect} from 'react';
import './App.css';
import {getQuiz} from "./services/quiz_service"

function App() {
  
useEffect (()=>{
   async function getquestion(){
     const data=await getQuiz(5,"easy")
     console.log(data)
   }
   getquestion();
},[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
