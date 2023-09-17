import React from 'react'

function Nav() {
  return (
    <nav>
        <div className="container">
            <div className='logo'>
                
            </div>
            <ul id='menu'>
                <li><a href='#home'><span data-hover='Home'>Home</span></a></li>
                <li><a href='/counter'><span data-hover='About Us'>Counter</span></a></li>
                <li><a href="/fetch"><span data-hover='Services'>Fetch</span></a></li>
                <li><a href="/image"><span data-hover='Services'>Brands</span></a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav