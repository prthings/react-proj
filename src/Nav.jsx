// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import {Outlet,Link} from "react-router-dom"
import logo from '/logo.svg'

function Nav() {
  const [mobile, setMobile]=useState(false)
  const toggle=()=>{
    setMobile(!mobile)
  }
  return (
    <nav>
        <div className="container">
            <div className='logo'>
              <a href="/"><img src={logo} alt="Logo" width={230} /></a>
            {/* <h1>Hello<span>PR</span></h1> */}
            </div>
            <ul className={mobile ? "menu mobmenu": "menu"}>
                <li><Link to='/counter1'>Counter function</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/fetch'>Fetch</Link></li>
                <li><Link to='/image'>Image</Link></li>
            </ul>
        </div>
        <Outlet />
        <div className='icons' onClick={toggle}>
          {mobile ? (<i className='fas fa-times'></i>):(<i className='fas fa-bars'></i>)}
        </div>
    </nav>
  )
}

export default Nav