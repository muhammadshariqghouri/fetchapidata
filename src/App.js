import React, { useEffect, useState } from 'react';
import piaic from './piaic.png';
import './App.css';

function App() {
  const [repos, setRepos] = useState([{}]);

  useEffect(() => {

    async function getRepos() {
      const response = await fetch("https://api.github.com/users/muhammadshariqghouri/repos")
      const data = await response.json();
      console.log(data);
      setRepos(data)
    }
    getRepos();

  }, [])

  return (
    <div className='App'>
      <center>
      <header>
        <img src={piaic} className="App-piaic" alt="piaic" /></header></center>
      <h1>I am Muhammad Shariq Bilal Ghouri</h1>
      <h2>Studnet of PIAIC Course AI Batch 1 and Studing also React in Bootcamp</h2>
      <h3>My Repositories are Listed Below</h3>
      <ul>
        {repos.map((repoObj, ind) => {
          return (<li key={ind}>{repoObj.name}</li>)
      })}
      </ul>
    </div>

  );
}

export default App;
