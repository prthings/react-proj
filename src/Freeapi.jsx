import React from 'react'
import data from './data/api.json'

function Freeapi() {
    return (
        <div className='main'>
            {data.map(item => (
               <div key={item.id} className='box'>
                <h2>{item.id}. <span>{item.name}</span></h2>
                <h3>Category: {item.category}</h3>
                <h5>{item.description}</h5>
                 <p><a href={item.url} target='_blank' rel="noreferrer">{item.name}</a></p>
               </div>
            ))}
        </div>
      );
}

export default Freeapi
