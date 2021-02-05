import React from 'react'
import { Routes, Route } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom"
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import Whoops404 from "./pages/Whoops404";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/users" element={<Users />}/>
       <Route path="/user" element={<User />}/>
       <Route path="*" element={<Whoops404 />}/>
     </Routes>
    </Router>
  );
}

export default App;
