import React from 'react'
import {useState} from "react"
import x from "./assets/x.png"
const Jokes = () => {
    const [jokeData , setJokeData] = useState()
    const [jokeCategory , setJokeCategory] = useState("")
    const [parts , setParts] = useState("") 


    async function getJoke(){
        if(jokeCategory === "Christmas" && parts === "single" || jokeCategory === "Spooky" && parts=== "single"){
            setJokeData("Only Set up and Delivery is available  this section");
            return;
        }
        if(jokeCategory === "" || parts === ""){
            return
        }
        const response = await fetch (`https://v2.jokeapi.dev/joke/${jokeCategory}?type=${parts}`);
        const data = await response.json();
       setJokeData(parts === "single" ? data.joke : data.setup + " " + data.delivery);
       console.log(jokeCategory)       
    }
    function tweet(){
      window.open(`https://twitter.com/intent/tweet?text=${jokeData}`,
          "Tweet Window", "width=600, height=300")
  }

  return (
    <div className="jokeContainer">
     <div className="container">
        <h1>Choose the type of the joke</h1>
        
        <input type="radio" name="jokes" value="Programming" id="programming" onChange={(e) => setJokeCategory(e.target.value)}/>
        <label htmlFor="programming">Programming</label>
        <input type="radio" name="jokes" value="Miscellaneous" id="misc " onChange={(e) => setJokeCategory(e.target.value)}/>
        <label htmlFor="misc">Misc</label>
       
        <input type="radio" name="jokes" value="Pun" id="pun" onChange={(e) => setJokeCategory(e.target.value)}/>
        <label htmlFor="pun">Pun</label>
        <input type="radio" name="jokes" value="Spooky" id="spooky" onChange={(e) => setJokeCategory(e.target.value)}/>
        <label htmlFor="spooky">Spooky</label>
        <input type="radio" name="jokes" value="Christmas" id="christmas" onChange={(e) => setJokeCategory(e.target.value)}/>
        <label htmlFor="christmas">Christmas</label><br/><br/>

        <h2>Setup of the joke</h2>
        <input type="radio" name="setup" value="single" id="single" onChange={(e) => setParts(e.target.value)}/>
        <label htmlFor="single">All in one sentence</label>

        <input type="radio" name="setup" value="twopart" id="twopart"  onChange={(e) => setParts(e.target.value)}/>
        <label htmlFor="twopart">Set up and Delivery</label><br/><br/>
        <div id="container">
           <p>{jokeData}</p>
        </div>
        
        <button className="new-joke" onClick={getJoke}>New Joke</button>
        <button className="tweet-btn" onClick={tweet} >
            <img className="logo" src={x} alt=""/> Tweet
          </button>
          

    </div>
    </div>
  )
}

export default Jokes
