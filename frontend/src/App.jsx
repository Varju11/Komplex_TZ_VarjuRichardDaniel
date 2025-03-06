import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './oldalak/Home'
import Navbar from './oldalak/Navbar'


function App() {


  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
