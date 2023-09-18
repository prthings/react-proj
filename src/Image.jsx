import React from 'react'
import data from './data.json'

function Image() {
    return (
        <div className='main'>
            {data.map(item => (
               <div key={item.id} className='box'>
                <h4>{item.id}</h4>
                <h3>{item.brand}</h3>
                <div id='brand-logo'><img src={item.logo_url} alt={item.brand} /></div>
                <h4>{item.founded}</h4>
               </div>
            ))}
        </div>
      );
}

export default Image