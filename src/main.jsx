import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router , Routes , Route, BrowserRouter} from "react-router-dom"
import Counter from './Counter'
import Fetch from './Fetch'
import Image from './Image'
import Nav from './Nav'
import Counter1 from './Counter1'
import Quotes from './Quotes.jsx'
import Mobile from './Mobile.jsx'
import Freeapi from './Freeapi.jsx'
import Price from './Price.jsx'
import Api from './Api.jsx'
import Todo from './Todo.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Router>
        <Nav />
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/counter1" element={<Counter1 />}/>
            <Route path='/counter' element={<Counter />} />
            <Route path='/image' element={<Image/>} />
            <Route path='/fetch' element={<Fetch/>} />
            <Route path='/quote' element={<Quotes/>} />
            <Route path='/pass' element={<Mobile/>} />
            <Route path='/freeapi' element={<Freeapi/>} />
            <Route path='/price' element={<Price/>} />
            <Route path='/api' element={<Api/>} />
            <Route path='/todo' element={<Todo/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
    </Router>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
