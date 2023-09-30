import React, { useState } from 'react'
import './api.style.css'
import list from './data/resource.json'

function Api() {
  let [data , setData] = useState(list)

  return (
    <div className='main-box'>
      <h1>Hello Welcome To Api</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore vitae nulla fugiat dignissimos corporis suscipit amet porro quas harum quis placeat illum quisquam quasi nam reprehenderit voluptates unde, cum iure!</p>
      {data.map((item, index)=>{
        return(
          <>
          <div className='box-one'>
            <div className='img' key={index}>
            <img  src={item.Img} alt={item.API} width={400} />
              <div className='names'>
              <h1>{item.API}</h1>
              <h5>{item.Category}</h5>
              <p>{item.Description}</p>
              <a href={item.Link} target="_blank" rel="noreferrer"><button>{item.API}</button></a>
              </div>
            </div>
          </div>
          </>
        )
      })}
    </div>
  )
}

export default Api