import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Counter from './Counter'
import Fetch from './Fetch'
import Image from './Image'
import Nav from './Nav'
import Counter1 from './Counter1'
import Quotes from './Quotes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Router>
        <Nav />
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/counter1" element={<Counter1 />}/>
            <Route path='/counter' element={<Counter />} />
            <Route path='/image' element={<Image/>} />
            <Route path='/fetch' element={<Fetch/>} />
            <Route path='/quote' element={<Quotes/>} />
        </Routes>
    </Router>
  </React.StrictMode>,
)
