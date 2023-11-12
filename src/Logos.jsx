import React from 'react'
import data from './data/logos.json'
function Logos() {
    const path="./asset/logos/"
  return (
    <div className='main'>
        {data.map(item => (
               <div key={item.id} className='box'>
                <h4>{item.shortname}</h4>
                <h3>{item.name}</h3>
                <div id='brand-logo'><a href={item.url} target="_blank" rel="noopener noreferrer"><img src={path} alt={item.brand} /></a></div>
                <h4>{item.founded}</h4>
               </div>
            ))}
    </div>
  )
}

export default Logos
