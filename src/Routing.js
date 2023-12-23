import React from 'react'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import './App.css'
import './Style.css'

export const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <nav className='navBar'>
        <Link to='/' class="one">Home</Link>
        <Link to='/about' class="one">About</Link>
        <Link to='/contact'class="one">Contact</Link>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}
