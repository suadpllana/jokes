import React from 'react'
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <nav className="navContainer">
         <Link to="/jokes">Jokes</Link>
        <Link to="/jokes/chuck-norris">ChuckNorris</Link>

    </nav>
  )
}

export default Nav
