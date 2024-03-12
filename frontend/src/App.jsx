// eslint-disable-next-line no-unused-vars
import React from "react"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from './pages/LogIn'
import Home from "./pages/Home"

function App() {
 

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
