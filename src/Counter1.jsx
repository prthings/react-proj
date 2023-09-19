import React, { useState } from 'react'

function Counter1() {
  const [counter, setCounter]=useState(0)
  const handlereset=()=>{
    setCounter(0)
  }
  return (
    <div className='one'>
      <h1>{counter}</h1>
      <div className='two'>
      <button onClick={()=>setCounter(counter - 1)}>Minus</button>
      <button onClick={handlereset}>Reset</button>
      <button onClick={()=>setCounter(counter + 1)}>Plus</button>
      </div>
    </div>
  )
}

export default Counter1