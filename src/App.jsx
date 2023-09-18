import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Counter from './Counter'
import Fetch from './Fetch'
import Image from './Image'
import Nav from './Nav'
import Counter1 from './Counter1'


export default function App() {
  return (
    <Router>
        <Nav />
        <Routes>
            <Route path="/counter1" element={<Counter1 />}/>
            <Route path='/counter' element={<Counter />} />
            <Route path='/image' element={<Image/>} />
            <Route path='/fetch' element={<Fetch/>} />
        </Routes>
    </Router>
  )
}
