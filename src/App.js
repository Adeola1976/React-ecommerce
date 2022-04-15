import React, {useEffect} from 'react';
import './App.css';
import Errorboundary from './components/utility/Errorboundary'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/user/Dashboard'
import Home from './components/pages/Home'
import Service from './components/pages/Service'
import Mepa from './components/pages/Mepa'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login' 
import Register from './components/pages/Register'
import Registered from './components/pages/Registered'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  
  useEffect (() => {
    // initialise material js.
    M.AutoInit();
})   
  return (
             <Errorboundary>
                   
                   <div style={{backgroundColor:"#e9ecef"}}>
                   <Router>
                      <Navbar/>
                      <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/service" element={<Service/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/mepa" element={<Mepa/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/registered" element={<Registered/>} />
                        <Route path="/dashboard" element={<Dashboard/>} />
                      </Routes>
                    </Router>
                  
                   </div>
             </Errorboundary>

  );
}

export default App;
