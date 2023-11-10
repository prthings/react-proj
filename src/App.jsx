import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <div className='home'>
      <h1>Hello Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut in atque, maxime incidunt, exercitationem quisquam consequatur odit sequi sapiente repellat debitis harum sit ab accusantium earum dolor facere rem.</p>

<div className='home-button'>
      <button><Link to="/pass">Password Generator</Link></button>
      <button><Link to="/quote">Random Quotes</Link></button>
      <button><Link to="/image">Image</Link></button>
      <button><Link to="/fetch">Fetch</Link></button>
      <button><Link to="/freeapi">Free Api</Link></button>
      <button><Link to="/price">Crypto Price</Link></button>
      <button><Link to="/api">API</Link></button>
      <button><Link to="/todo">Todo</Link></button></div>
      </div>
    </div>
  )
}
