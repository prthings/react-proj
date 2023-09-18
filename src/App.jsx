import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Counter from './Counter'
import Fetch from './Fetch'
import Image from './Image'
import Nav from './Nav'


export default function App() {
  return (
    <Router>
        <Nav />
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/counter' element={<Counter />} />
            <Route path='/image' element={<Image/>} />
            <Route path='/fetch' element={<Fetch/>} />
        </Routes>
    </Router>
  )
}
