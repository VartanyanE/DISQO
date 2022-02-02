import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notepad from "./pages/Notepad";
import Gists from "./pages/Gists";


function App() {
  
  return (
    <BrowserRouter>
     
        <Routes>
            <Route path="/" element={<Notepad />} />
            <Route path="/gists" element={<Gists />} />
            </Routes>
         
       
    </BrowserRouter>
  )
}

export default App;
