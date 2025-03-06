import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './oldalak/App.css'
import Home from './oldalak/Home'
import Navbar from './oldalak/Navbar'
import Header from './oldalak/Header'


function App() {


  return (
    <>
      <div className='App'>
        <Header/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
