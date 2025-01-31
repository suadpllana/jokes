import React from 'react'
import "./ChuckNorris.css"
import x from "./assets/x.png"
import {useState,useEffect} from "react"
const ChuckNorris = () => {
    const [chuckNorrisData, setChuckNorrisData] = useState("")
  useEffect(() => {
    generateJoke()
  } ,[])

async function generateJoke(){
   
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await response.json();
   setChuckNorrisData(data.value);
 
}
function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${chuckNorrisData}`,
        "Tweet Window", "width=600, height=300")
}
  return (
    <div className="chuck-norris">
   <div className="chuck-norris-container">
    <h1>Chuck Norris Jokes</h1>
    <p id="joke">{chuckNorrisData}</p>
    <button id="button" onClick={generateJoke}>Generate Joke</button>
    <button class="tweet-btn"  onClick={tweet}>
        <img class="logo" src={x} alt=""/> Tweet
      </button>
      
</div>
    </div>
 
  )
}

export default ChuckNorris
