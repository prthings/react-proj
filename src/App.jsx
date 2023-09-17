import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Counter from './Counter'
import Fetch from './Fetch'
import Image from './Image'
import Nav from './Nav'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/fetch" element={<Fetch/>}/>
        <Route path="/image" element={<Image />}/>
      </Routes>
    </BrowserRouter>
  )
}
