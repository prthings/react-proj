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
                <div id='brand-logo'><img src={path} alt={item.brand} /></div>
                <h4>{item.founded}</h4>
               </div>
            ))}
    </div>
  )
}

export default Logos
