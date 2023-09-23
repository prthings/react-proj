import React from 'react'
import data from './data/api.json'

function Freeapi() {
    return (
        <div className='main'>
            {data.map(item => (
               <div key={item.id} className='box'>
                <h4>{item.id}</h4>
                <h3>{item.category}</h3>
                <h4>{item.description}</h4>
                 <p><a href={item.url} target="_blank">{item.api-name}</a></p>
               </div>
            ))}
        </div>
      );
}

export default Freeapi
