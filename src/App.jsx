import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Jokes from './Jokes';
import Nav from './Nav';
import ChuckNorris from "./ChuckNorris";
function App() {


  return (
    <>
  <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Jokes />} />
        <Route path="*" element={<Jokes />} />
        <Route path="jokes/home" element ={<Jokes/>}/>
        <Route path="jokes/chuck-norris" element={<ChuckNorris/>}/>
      </Routes>
    </Router>  
    </>
  )
}

export default App
