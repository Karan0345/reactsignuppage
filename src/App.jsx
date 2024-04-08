import React from 'react'
import {
  BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Two from './Components/Two';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
  
      <Route path="/" element={<Home />} /> 
      <Route path="/Two" element={<Two />} /> 
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
