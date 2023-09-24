import React from 'react'
import data from './data/api.json'

function Freeapi() {
  let avatar= "https://api.dicebear.com/7.x/fun-emoji/svg?seed={item.name}"
    return (
      <div>
          <p>Find free public APIs for your projects and use them without any cost! Our comprehensive platform offers a wide range of APIs, allowing you to seamlessly integrate the functionalities you need. Don't miss out on our free API offerings and unlock endless possibilities for your development needs. Start exploring now! List of Free Public Api&apos;s to use for your projects here are some free apis. </p>
        <div className='main'>
            {data.map(item => (
              <a key={item.id} href={item.url} target='_blank' rel="noreferrer" className='cards-link'>
               <div className='apidata'>
                <h2>{item.id}. <span>{item.name}</span></h2>
                <h3>Category: {item.category}</h3>
                <h5>{item.description}</h5>
                <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.name}&radius=25&randomizeIds=true&fontFamily=sans-serif,Trebuchet%20MS,Tahoma,Times%20New%20Roman,Verdana&fontSize=46&fontWeight=500`} alt={item.name} width={60} />
                 <p><a href={item.url} target='_blank' rel="noreferrer"><button>{item.name}</button></a></p>
               </div>
               </a>
            ))}
        </div>
      </div>
      );
}

export default Freeapi
