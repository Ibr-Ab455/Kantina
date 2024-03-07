// eslint-disable-next-line no-unused-vars
import React from "react"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from './pages/LogIn'

function App() {
 

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
