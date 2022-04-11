import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const storage = localStorage.getItem('job');
  console.log(storage); 
  const [jobs, setJobs] = useState([]);
  const [inputJob, setInputJob] = useState("");
  console.log(inputJob);

  const handleClick = () => {
    setJobs(pre =>{
      const newJob = [...pre,inputJob]

      const jsonJobs = JSON.stringify(newJob);
       localStorage.setItem('job',jsonJobs); 
       return newJob
    })
    setInputJob('') 
    
  }

  return (
    <div className="App">
      <div className="todo">
        <input
          value={inputJob}
          type="text"
          onChange={e => setInputJob(e.target.value)}
        />
        <button onClick ={handleClick} className="margin"> Add</button>
        <ul>
          {jobs.map((inputJob, index) => (
            <li key={inputJob.index}>{inputJob}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// thử commit 
export default App;
