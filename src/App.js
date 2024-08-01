import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";

import SignUp from "./component/SignUp";
import Home from "./component/Home";

function App() {
  return (
    <React.Fragment>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={ <SignUp/>} />
        </Routes>
        </BrowserRouter>
          
      
        </div>     
    </React.Fragment>
  );
}

export default App;
