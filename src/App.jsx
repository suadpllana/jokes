import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/jokes/home" element ={<Jokes/>}/>
        <Route path="/jokes/chuck-norris" element={<ChuckNorris/>}/>
        <Route path="*" element={<Navigate to="/restaurant" />} />
      </Routes>
    </Router>  
    </>
  )
}

export default App
