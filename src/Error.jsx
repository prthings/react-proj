import React from 'react'
import './assets/error.css'
function Error() {
  return (
    <div className='main-section'>
      <div className='error-404'>
            <h1>4<span className='zero'>0</span>4</h1>
            <div className='image-error'></div>
            <h3>The page you are looking for might have been removed had <br />its name changed or is temporarily unavailable.</h3>
            <a href="/"><button>Go Back</button></a>
      </div>
    </div>
  )
}

export default Error