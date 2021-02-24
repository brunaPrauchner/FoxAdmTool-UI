import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import Whoops404 from "./pages/Whoops404";
import history from "./history";
import './App.css'

function App() {
  return (
    <div className='app-container'>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Whoops404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
