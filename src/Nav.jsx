import React from 'react'
import {Link} from "react-router-dom"
import logo from '/logo.svg'

function Nav() {
  return (
    <nav>
        <div className="container">
            <div className='logo'>
              <a href="/"><img src={logo} alt="Logo" width={280} /></a>
            {/* <h1>Hello<span>PR</span></h1> */}
            </div>
            <ul id='menu'>
                <li><Link to='/counter1'>Counter function</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/fetch'>Fetch</Link></li>
                <li><Link to='/image'>Image</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav