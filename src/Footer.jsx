import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
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