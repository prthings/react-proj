import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <p className='info-warn'>Hi Welcome to all this is my first project that i am exapnding my skills through this project and i am learning from this project also and All my projects covered here</p>
        <hr />
        <div className='footer-content'>
        <div>© 2023 HelloPR, All rights reserved.</div>
        <div>
            <ul className='footer-menu'>
                <li><a href='/about'>About Us</a></li>
                <li><a href='/about'>Contact Us</a></li>
                <li><a href='/about'>Changelog</a></li>
                <li><a href='/about'>Tools</a></li>
            </ul>
        </div>
        </div>
    </footer>
  )
}

export default Footer