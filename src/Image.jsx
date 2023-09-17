import React,{useState} from 'react'
import data from './data.json'

console.log(data)

function Image() {
    return (
        <div className='main'>
            {data.map(item => (
               <div key={item.id} className='box'>
                <h4>{item.id}</h4>
                <h3>{item.brand}</h3>
                <img src={item.logo_url} alt={item.brand} />
                <h4>{item.founded}</h4>
               </div>
            ))}
        </div>
      );
}

export default Image