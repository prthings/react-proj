import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <p style={{textAlign:'center',color:'red'}}>* Don&apos;t Refresh directly goto homapage and then try to refresh the page.</p>
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