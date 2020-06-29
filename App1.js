import React, { useEffect, useState } from 'react';
import piaic from './piaic.png';
import './App.css';

function App() {

    const [repos, setRepos] = useState([{}]);
  
    useEffect( () => {
  
      async function getRepos() {
      getRepos();
  
       "https://api.github.com/users/muhammadmohsin/repos"
       fetch('https://jsonplaceholder.typicode.com/posts/1')
         .then(response => response.json())
         .then(json => {
           console.log(json);
           setData(json);
         })
         return (
            <div className="App">
              <h1>You are seeing all repositories</h1>
              <ul>
                {repos.map((repoObj, ind) => {
                  return (<li key={ind}>{repoObj.name}</li>)
                })}
              </ul>
            </div>
          );
        }

export default App1;